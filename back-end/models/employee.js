const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    fullName: {
        type: String,
        required: true,
    },
    initialName: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    employeeType: {
        type: String,
        required: true,
    },
    joinedDate: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },

})

const Employee = mongoose.model("Employee", employeeSchema); // passing two parameters, tablename(document) & schemaname

module.exports = Employee;