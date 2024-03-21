const mongoose = require('mongoose');

const bgwInitialPlanSchema = new mongoose.Schema({
 
  head: {
    type: String,
    required: true,
  },
  list: {
    type: [String],
    required: true,
  },
});

const BgwInitialPlanModel = mongoose.model('BgwInitialPlan', bgwInitialPlanSchema);

module.exports = BgwInitialPlanModel;
