import { DateTime } from "luxon";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
    title: { type: String, required: true },
    preview: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    elements: [{ type: Schema.Types.ObjectId, ref: "Element", required: true }],
    date: { type: Date, default: Date.now },
    published: { type: Boolean, required: true },
});

PostSchema.virtual("url").get(function () {
    return `/post/${this._id}`;
});