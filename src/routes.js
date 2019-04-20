const express = require('express');
const multer = require('multer');

const routes = express.Router();

const CarsController = require('./controllers/CarsController');

routes.get('/cars', CarsController.show);

module.exports = routes;
