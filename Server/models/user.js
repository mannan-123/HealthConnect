const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema(
    {
        username: String,
        fatherName: String,
        email: String,
        password: String,
    },
    { timestamps: true }
);
module.exports = mongoose.model("Login", LoginSchema);

const AppointmentSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        contact: String,
        dateOfAppointment: Date,
        shift:Boolean,
    },
    { timestamps: true }
);
module.exports = mongoose.model("Appointment", AppointmentSchema);