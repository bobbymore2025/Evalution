const { Schema, model } = require("mongoose");

const screenSchema = new Schema(
  { 
    name:{ type: String, required:true},
    threater: { type: String, required: true},
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("screen", screenSchema); 
