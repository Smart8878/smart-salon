const mongoose = require("mongoose");
var crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  number: {
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
  },
  hash: {
    type: String
  },
  salt: {
    type: String
  }
});

UserSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex');

  // Hashing user's salt and password with 1000 iterations,
  //  64 length and sha512 digest
  this.hash = crypto.pbkdf2Sync(password, this.salt,
    1000, 64, `sha512`).toString(`hex`);
};

UserSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password,
    this.salt, 1000, 64, `sha512`).toString(`hex`);
  return this.hash === hash;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;