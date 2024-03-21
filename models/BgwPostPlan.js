const mongoose = require('mongoose');

const bgwPostPlanSchema = new mongoose.Schema({
    
  workout: {
    type: String,
    required: true,
  },
  Days: {
    type: [String],
    required: true,
  },
});

const BgwPostPlanModel = mongoose.model('BgwPostPlan', bgwPostPlanSchema);

module.exports = BgwPostPlanModel;
