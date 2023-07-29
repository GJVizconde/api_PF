const { Router } = require('express');
const getRatingsHandler = require('../handlers/Rating/getRatingsHandler');
const deleteRating = require('../controllers/Rating_Project/deleteRating');
const updateRating = require('../controllers/Rating_Project/updateRating');
const getAllRatings = require('../controllers/Rating_Project/getAllRatings');
const getRatingById = require('../controllers/Rating_Project/getRatingById');

// const {
//   validateCreateUser,
//   validateUpdateUser,
//   validateId,
// } = require('../middlewares/User/index');

const ratingRouter = Router();

ratingRouter.get('/', getRatingsHandler);

ratingRouter.delete('/:id', deleteRating);

ratingRouter.put('/:id', updateRating);

ratingRouter.get('/', getAllRatings);

ratingRouter.get('/:id', getRatingById);

module.exports = ratingRouter;
