import { DateTime } from "luxon";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CommentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
});

CommentSchema.virtual("url").get(function () {
    return `/post/${this.post}/comments/${this._id}`;
});