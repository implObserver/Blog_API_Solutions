import { DateTime } from "luxon";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ElementSchema = new Schema({
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    tag: {
        type: String,
        required: true,
        enum: ["p", "ul", "h2", "h3"],
        default: "h2",
    },
});