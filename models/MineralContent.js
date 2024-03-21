const mongoose = require('mongoose');

const mineralSchema = new mongoose.Schema({
 
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

const MineralModel = mongoose.model('Mineral', mineralSchema);

module.exports = MineralModel;
