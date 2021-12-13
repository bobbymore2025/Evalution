const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  { 
    name:{ type: String, required:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_pic_url:[{type:String,required:false}],
    role:{type:String, required:true, default:"customer"}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
 
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
 const hash= bcrypt.hashSync("bacon", 10);
    this.password = hash;
    return next();
  });

userSchema.methods.checkPassword = function(password) {
  return new Promise((resolve, reject) => {
    console.log(password);
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);
      return resolve(same);
    });
  });
};

module.exports = model("user", userSchema); 