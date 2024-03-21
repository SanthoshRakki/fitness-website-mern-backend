const mongoose = require('mongoose');

const fatSchema = new mongoose.Schema({
 
  FoodItem: {
    type: String,
    required: true,
  },
  Quantity: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
    required: true,
  },
});

const FatModel = mongoose.model('Fat', fatSchema);

module.exports = FatModel;
