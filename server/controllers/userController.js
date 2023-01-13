const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const User = require("../models/user");
const Form = require("../models/form");
const { generateloginId } = require("../utils/generateLoginId");


const getUsers = async (req, res) => {
	try {
		const Users = await User.find({}, { name: 1, loginID: 1 });
		return res
			.status(200)
			.send({ message: "List of Users retrieved", Users });
	} catch (err) {
		res.status(500).send({ message: "Something went wrong", err });
	}
};

const submitForm = async (req, res) => {
	try {
		const data = new Form(req.body)
		await data.save();
		res.status(200).send({message:"Form submitted", data});
	} catch (err) {
		res.status(500).send({ message: "Something went wrong",error:err });
	}
}


const createUser = async (req, res) => {

	let success = false;
	try {
		let user = await User.findOne({
			loginID: req.body.loginID,
		});
		if (user) {
			success = false;
			return res.status(400).json({
				success,
				error: "loginID already Exists"
			});
		}

		const salt = await bcrypt.genSalt(10);
		const secPass = await bcrypt.hash(req.body.password, salt);

		const loginId = generateloginId(req.body.name);
		
		user = await User.create({
			name: req.body.name,
			phoneNumber: req.body.phoneNumber,
			email: req.body.email,
			loginID: loginId,
			password: secPass,
			location: req.body.location
		});
		console.log("hiii");
		const authToken = generateToken(user._id);
          
		success = true
		res.status(200).json({ success, authToken, user })
	} catch (error) {
		console.log(error.message),
		res.status(500).send("Internal Server Error");
	}
}

const loginUser = async (req, res) => {

	const { loginID, password } = req.body;

	try {
		let success = false;
		if (!(loginID && password)) {
			success = false;
			res.status(400).send({
				success,
				error: "Missing fields"
			});
		}

		const existingUser = await User.findOne({
			loginID: loginID
		});
		if (!existingUser)
			return res.status(404).json({
				success,
				error: "User doesn't exist"
			});

		const isPasswordValid = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isPasswordValid)
			return res.status(401).json({ success, error: "Invalid password" });

		success = true;
		res.status(200).json({
			success,
			user: existingUser,
			token: generateToken(existingUser._id),
		});
	} catch (err) {
		res.status(500).json({ message: "Something went wrong" ,err});
	}
};


const getDetails = async (req, res) => {
	try {
		const userID = req.params.id;
		const user = await User.find(userID);
		
		if (!user)
			return res.status(404).send("User not found")
		
		const forms = await Form.find({ user_id: userID }).sort({updatedAt: -1});
		if (!forms)
			return res.status(404).send("No submissions yet")
		
		res.status(200).send({ message: "Successfully fetch", forms });
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Internal Server Error");
	}
}
const updateContact = async (req, res) => {
	const userId = req.params.id;
	const { newPhn, newMail, newName } = req.body;

	try {
		const user = await User.findOne(userId);
		if (!user)
			return res.status(404).json({ message: "User not found" });
		
		if (newPhn)
			user.phoneNumber = newPhn;
		if (newMail)
			user.email = newMail;
		if (newName)
			user.name = newName;
		
		await user.save();
		
		res.status(200).send({ message: "User details updated successfully" });
	} catch (err) {
		return res.status(500).json({ message: "Something went wrong" ,error:err});
	}
}

const updatePwd = async (req, res) => {
	const { oldPassword, newPassword } = req.body;
	const userId = req.params.id;

	try {
		if (!(oldPassword && newPassword) ) {
			return res.status(400).json({ message: "Missing fields" });
		}

		const existingUser = await User.find(userId);
		if (!existingUser)
			return res.status(404).json({ message: "User doesn't exist" });
		
		if (newPhn)
			existingUser.phoneNumber = newPhn;
		if (newName)
			existingUser.name = newName;
		if (newMail)
			existingUser.email = newMail;
		
		const isPasswordValid =await bcrypt.compare(
			oldPassword,
			existingUser.password
		);
		if (!isPasswordValid)
			return res.status(401).json({ message: "Invalid password" });

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(newPassword, salt);
		existingUser.password = hashedPassword;
		console.log(existingUser);
		await existingUser.save();

		return res.status(200).json({ message: "Password updated successfully" });
	} catch (err) {
		return res.status(500).json({ message: "Something went wrong" ,error:err});
	}
};

const deleteUser = async (req, res) => {
	const userId = req.params.id;

	try {
		const user = await User.find(userId);
		if (!user)
			return res.status(404).json({ message: "User not found" });
		await User.deleteOne({ _id: userId });
		
		return res.status(200).json({ message: "User deleted successfully" });
	} catch (err) {
		return res.status(500).json({ message: "Something went wrong" ,error:err});
	}
}
module.exports = { createUser, loginUser, getDetails, submitForm, updatePwd, getUsers,updateContact, deleteUser };

