const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email:{
    type: String
  },
  number:{
    type: Number
  },
  type: {
    type: String // owner , customer , admin
  },
  services: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }]
  },
  shop_images: {
    type: [String]
  },
  profile_image: {
    type: String,
    default: 'https://soulverse.boo.world/images/1.png'
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;