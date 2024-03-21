const mongoose = require('mongoose');

const fiberSchema = new mongoose.Schema({
 
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

const FiberModel = mongoose.model('Fiber', fiberSchema);

module.exports = FiberModel;
