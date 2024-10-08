import express from 'express';
import { useGlobalSetters } from './set/index.js';
import { useGlobalMiddlewares } from './use/index.js';
import { prismaDB } from '../database/prisma/queries.js';
//prismaDB.updateTags();
export const app = express();

//prismaDB.removeAll();
useGlobalSetters();
useGlobalMiddlewares();
