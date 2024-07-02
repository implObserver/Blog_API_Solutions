import mongoose from "mongoose";
import { ElementSchema } from "../../database/schemas/post/element.js";

export const Element = mongoose.model('Element', ElementSchema);