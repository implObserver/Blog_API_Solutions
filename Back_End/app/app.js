import express from "express";
import { connectLibraryDB } from "../database/mongoDB/dispatcherdb.js";
import { useGlobalSetters } from "./set/index.js";
import { useGlobalMiddlewares } from "./use/index.js";
import { prismaDB } from "../prisma/queries.js";

export const app = express();
//prismaDB.removeAll()
connectLibraryDB();
useGlobalSetters();
useGlobalMiddlewares();