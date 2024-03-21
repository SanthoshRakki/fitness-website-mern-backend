const mongoose = require('mongoose');

const agwInitialPlanSchema = new mongoose.Schema({
 
  head: {
    type: String,
    required: true,
  },
  list: {
    type: [String],
    required: true,
  },
});

const AgwInitialPlanModel = mongoose.model('AgwInitialPlan', agwInitialPlanSchema);

module.exports = AgwInitialPlanModel;
