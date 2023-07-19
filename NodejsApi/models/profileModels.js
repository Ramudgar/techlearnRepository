const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  image: {
    type: String,
  },

  age: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
