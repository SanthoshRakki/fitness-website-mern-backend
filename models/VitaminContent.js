const mongoose = require('mongoose');

const vitaminSchema = new mongoose.Schema({
  
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

const VitaminModel = mongoose.model('Vitamin', vitaminSchema);

module.exports = VitaminModel;
