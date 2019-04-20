const mongoose = require('mongoose');

const Cars = new mongoose.Schema(
	{
		bids: [],
		id: {
			type: String,
			required: true
		},
		make: {
			type: String,
			required: true
		},
		model: {
			type: String,
			required: true
		},
		year: {
			type: Number,
			required: true
		},
		version: {
			type: String,
			required: true
		},
		km: {
			type: Number,
			required: true
		},
		remainingTime: {
			type: Number,
			required: true
		},
		imageUrl: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('cars', Cars);
