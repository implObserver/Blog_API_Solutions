import mongoose from "mongoose";
import { CommentSchema } from "../database/schemas/comment.js";

export const Comment = mongoose.model('Comment', CommentSchema);