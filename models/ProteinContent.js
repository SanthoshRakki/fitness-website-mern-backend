const mongoose = require('mongoose');

const proteinSchema = new mongoose.Schema({
 
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

const ProteinModel = mongoose.model('Protein', proteinSchema);

module.exports = ProteinModel;
