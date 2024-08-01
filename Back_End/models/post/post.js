import mongoose from "mongoose";
import { PostSchema } from "../../database/mongoDB/schemas/post/post.js";


export const Post = mongoose.model('Post', PostSchema);