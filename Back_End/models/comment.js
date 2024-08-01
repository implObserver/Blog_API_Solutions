import mongoose from "mongoose";
import { CommentSchema } from "../database/mongoDB/schemas/comment.js";

export const Comment = mongoose.model('Comment', CommentSchema);