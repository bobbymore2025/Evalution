const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  { 
    name:{ type: String, required:true},
    actor: { type: String, required: true},
    language: { type: String, required: true },
    director:{type:String, require:true},
    poster_url: [{type:String,require:false}],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("movie", movieSchema); 
