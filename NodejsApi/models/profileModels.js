const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
    },
    image: {
        type: String,
    },
    location: {
        type: String,
    },
    website: {
        type: String,
    },
    age:{
        type: Number,
    },
    phone:{
        type: Number,
    },
    address:{
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
