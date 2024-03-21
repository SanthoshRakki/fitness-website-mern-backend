const mongoose = require('mongoose');

const alwInitialPlanSchema = new mongoose.Schema({
 
  head: {
    type: String,
    required: true,
  },
  list: {
    type: [String],
    required: true,
  },
});

const AlwInitialPlanModel = mongoose.model('AlwInitialPlan', alwInitialPlanSchema);

module.exports = AlwInitialPlanModel;
