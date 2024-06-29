import { toBeRequired } from '@testing-library/jest-dom/matchers';
import { type } from '@testing-library/user-event/dist/type';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserNoteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    descirption:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    date: { 
        type: Date,
        default: Date.now
    },

  }
);

module.exports = mongoose.model("notes", UserNoteSchema)