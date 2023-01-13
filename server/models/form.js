const mongoose = require("mongoose");
const user = require('./user');

const formSchema = new mongoose.Schema(
	{
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
		item_name: {
			type: String,
			required: true,
		},
		item_quantity: {
			type: Number,
			required: true,
		},
		item_price: {
			type: Number,
			required: true,
		},
		item_description: {
			type: String,
		}
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("form", formSchema);