const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const db=require('../conn');
const adSchema = new mongoose.Schema({
  companyId: {
    type: ObjectId,
    required: true,
  },
  primaryText: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type:String,
    required: true,
  },

  CTA: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Ad", adSchema);
