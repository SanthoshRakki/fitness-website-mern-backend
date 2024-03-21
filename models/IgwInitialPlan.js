const mongoose = require('mongoose');

const igwInitialPlanSchema = new mongoose.Schema({
 
  head: {
    type: String,
    required: true,
  },
  list: {
    type: [String],
    required: true,
  },
});

const IgwInitialPlanModel = mongoose.model('IgwInitialPlan', igwInitialPlanSchema);

module.exports = IgwInitialPlanModel;
