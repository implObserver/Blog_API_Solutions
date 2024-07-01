import mongoose from "mongoose";
import { ElementSchema } from "../../database/schemas/post/element";

export const Element = mongoose.model('Element', ElementSchema);