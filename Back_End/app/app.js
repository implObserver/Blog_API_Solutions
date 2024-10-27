import express from 'express';
import { useGlobalSetters } from './set/index.js';
import { useGlobalMiddlewares } from './use/index.js';
//prismaDB.updateTags();
export const app = express();

//prismaDB.removeAll();
useGlobalSetters();
useGlobalMiddlewares();
