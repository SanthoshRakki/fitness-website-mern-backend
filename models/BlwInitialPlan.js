const mongoose = require('mongoose');

const blwInitialPlanSchema = new mongoose.Schema({
 
  head: {
    type: String,
    required: true,
  },
  list: {
    type: [String],
    required: true,
  },
});

const BlwInitialPlanModel = mongoose.model('BlwInitialPlan', blwInitialPlanSchema);

module.exports = BlwInitialPlanModel;
