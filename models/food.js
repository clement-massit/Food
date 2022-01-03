var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name : String,
  description : String,
  
});

module.exports = mongoose.model('Food', FoodSchema);
