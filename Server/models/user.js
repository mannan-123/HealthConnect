const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,

    },
    { timestamps: true }
);
module.exports = mongoose.model("Patient", LoginSchema);
