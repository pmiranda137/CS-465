const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET trips, list all the trips
const tripsList = async (req, res) => {
    model
        .find({})
        .exec((err, trips) => {
            if(!trips){
                return res
                .status(404)
                .json({"message": "trips not found"});
            } else if (err){
                return res
                .status(404)
                .json(err);
            } else {
                return res
                .status(200)
                .json(trips);
            }
        });
};

// GET trips, return a single trip
const tripsFindCode = async (req, res) => {
    model
        .find({'code': req.params.tripCode})
        .exec((err, trip) => {
            if(!trip){
                return res
                .status(404)
                .json({"message": "trip not found"});
            } else if (err){
                return res
                .status(404)
                .json(err);
            } else {
                return res
                .status(200)
                .json(trip);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindCode
};