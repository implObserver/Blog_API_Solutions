import mongoose from "mongoose";
import { PostSchema } from "../../database/schemas/post/post";


export const Post = mongoose.model('Post', PostSchema);