import { toBeRequired } from '@testing-library/jest-dom/matchers';
import { type } from '@testing-library/user-event/dist/type';
import mongoose from 'mongoose';
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

module.exports = mongoose.model("user", UserblogSchema)