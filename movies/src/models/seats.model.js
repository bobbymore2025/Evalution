const { Schema, model } = require("mongoose");

const seatsSchema = new Schema(
  { 
   
    show_id: [{ type:Schema.Types.ObjectId, ref: "show", require: true, }], 
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("seat", seatsSchema); 
