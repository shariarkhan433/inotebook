// import { toBeRequired } from '@testing-library/jest-dom/matchers';
// import { type } from '@testing-library/user-event/dist/type';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserblogSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date: { 
        type: Date,
        default: Date.now
    },

  }
);
const User = mongoose.model('user',UserblogSchema)

module.exports = User