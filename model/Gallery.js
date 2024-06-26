const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GallerySchema = new Schema(
	{
		galleryName: {
			type: String,
			required: true,
			maxLength: 100,
			default: "general",
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Gallery", GallerySchema);
