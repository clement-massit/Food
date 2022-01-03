function createFood(req, res) {
    let Food = require('../models/food');
    let newTodo = Food ({
        title: req.body.title,
        description : req.body.description
    });
  
    newTodo.save()
    .then((savedFood) => {

        //send back the created Food
        res.json(savedFood);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readFoods(req, res) {

    let Food = require("../models/food");

    Food.find({})
    .then((foods) => {
        res.status(200).json(foods);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readFood(req, res) {

    let Food = require("../models/food");

    Food.findById({_id : req.params.id})
    .then((food) => {
        res.status(200).json(food);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateFood(req, res) {

    let Food = require("../models/food");

    Food.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.description}, 
        {new : true})
    .then((updatedFood) => {
        res.status(200).json(updatedfood);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteFood(req, res) {

    let Food = require("../models/food");

    Todo.findOneAndRemove({_id : req.params.id})
    .then((deletedFood) => {
        res.status(200).json(deletedFood);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let Todo = require("../models/food");

    Food.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedFood) => {
        res.status(200).json(updatedFood);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let Food = require("../models/food");

    Food.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedFood) => {
        res.status(200).json(updatedFood);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createFood;
module.exports.reads = readFoods;
module.exports.read = readFood;
module.exports.delete = deleteFood;
module.exports.update = updateFood;
module.exports.done = done;
module.exports.undone = undone;
