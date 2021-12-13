const { Schema, model } = require("mongoose");

const threaterSchema = new Schema(
  { 
    name: { type: String, required: true },
    location:{ type: String, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("threater", threaterSchema); 
