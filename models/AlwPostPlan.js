const mongoose = require('mongoose');

const alwPostPlanSchema = new mongoose.Schema({
  workout: {
    type: String,
    required: true,
  },
  Days: {
    type: [String],
    required: true,
  },
});

const AlwPostPlanModel = mongoose.model('AlwPostPlan', alwPostPlanSchema);

module.exports = AlwPostPlanModel;
