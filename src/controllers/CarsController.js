const Cars = require('../models/Cars');

class CarsController {
	async show(req, res) {
		const cars = await Cars.find();

		return res.json(cars);
	}
}

module.exports = new CarsController();
