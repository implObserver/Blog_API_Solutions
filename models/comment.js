import mongoose from "mongoose";
import { CommentSchema } from "../database/schemas/comment";

export const Comment = mongoose.model('Comment', CommentSchema);