const mongoose = require('mongoose');

const ilwPostPlanSchema = new mongoose.Schema({
  workout: {
    type: String,
    required: true,
  },
  Days: {
    type: [String],
    required: true,
  },
});

const IlwPostPlanModel = mongoose.model('IlwPostPlan', ilwPostPlanSchema);

module.exports = IlwPostPlanModel;
