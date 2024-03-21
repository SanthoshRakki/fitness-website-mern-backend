const mongoose = require('mongoose');

const blwPostPlanSchema = new mongoose.Schema({
  workout: {
    type: String,
    required: true,
  },
  Days: {
    type: [String],
    required: true,
  },
});

const BlwPostPlanModel = mongoose.model('BlwPostPlan', blwPostPlanSchema);

module.exports = BlwPostPlanModel;
