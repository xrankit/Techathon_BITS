const router = require("express").Router();
const User = require("../models/user");
const generateToken = require("../utils/generateToken");
     
router.post("/", async (req, res) => {
     const { mail } = req.body;
     try {
          if (!mail) {
               res.status(400).send("Missing fields");
          }

          const existingUser = await User.findOne({
               email: mail,
          });
          if (!existingUser)
               return res.status(404).json({ message: "User doesn't exist" });

          const token = generateToken(existingUser._id);
          const link = `http://localhost:5000/password-reset/${existingUser._id}/${token}`;
          
          const text = `Hi ${existingUser.name},\n\nYou recently requested to reset your password for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\n${link}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n\nThanks,\n\nTeam`;
          const subject = "Password Reset Request";
          const email = existingUser.email;

          const sendEmail = require("../utils/sendEmails");
          sendEmail(email, subject, text);
          console.log("heeyyyy")
          res.status(200).send({
               message: "Email sent",
          });
     } catch (err) {
          res.status(500).send({ message: "Something went wrong",err });
     }
});

router.post("/:userId/:token", async (req, res) => {
	try {
		const user = await User.findById(req.params.userId);
		if (!user) return res.status(400).send("Invalid link");

		const token =  req.params.token
		if (!token) return res.status(400).send("Invalid link");

		user.password = req.body.password;
		await user.save();

		res.status(200).send("Password reset sucessfully.");
	} catch (err) {
		res.status(500).send({ message: "Something went wrong", err });
	}
});

module.exports = router;