import mongoose from "mongoose";
import { PostSchema } from "../../database/schemas/post/post.js";


export const Post = mongoose.model('Post', PostSchema);