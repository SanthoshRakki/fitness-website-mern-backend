const mongoose = require('mongoose');

const igwPostPlanSchema = new mongoose.Schema({
  workout: {
    type: String,
    required: true,
  },
  Days: {
    type: [String],
    required: true,
  },
});

const IgwPostPlanModel = mongoose.model('IgwPostPlan', igwPostPlanSchema);

module.exports = IgwPostPlanModel;
