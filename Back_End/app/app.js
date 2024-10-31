import express from 'express';
import { useGlobalSetters } from './set/index.js';
import { useGlobalMiddlewares } from './use/index.js';
export const app = express();

useGlobalSetters();
useGlobalMiddlewares();
