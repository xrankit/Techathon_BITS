function makeid(length) {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}
	return result;
}
const generateloginId = (name) => {
	const firstName = name.split(" ")[0];
	const x = makeid(2);
	return firstName + x;
};
module.exports = {
	generateloginId
};
