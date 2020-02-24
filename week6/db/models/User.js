
const mongoose = require('mongoose');

const User = mongoose.model('employee', {
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    jobTitle:{
        type: String,
        required: true
    }, 
    salary:{
        type: Number,
        required: true
    }
})

module.exports = User