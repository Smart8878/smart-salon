const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }
});

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;