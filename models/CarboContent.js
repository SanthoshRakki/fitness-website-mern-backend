const mongoose = require('mongoose');

const carboSchema = new mongoose.Schema({
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

const CarboModel = mongoose.model('Carbohydrates', carboSchema);

module.exports = CarboModel;
