const mongoose = require('mongoose');

const ilwInitialPlanSchema = new mongoose.Schema({
 
  head: {
    type: String,
    required: true,
  },
  list: {
    type: [String],
    required: true,
  },
});

const IlwInitialPlanModel = mongoose.model('IlwInitialPlan', ilwInitialPlanSchema);

module.exports = IlwInitialPlanModel;
