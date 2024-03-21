const mongoose = require('mongoose');

const agwPostPlanSchema = new mongoose.Schema({
  workout: {
    type: String,
    required: true,
  },
  Days: {
    type: [String],
    required: true,
  },
});

const AgwPostPlanModel = mongoose.model('AgwPostPlan', agwPostPlanSchema);

module.exports = AgwPostPlanModel;
