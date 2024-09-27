import express from 'express';
import { app } from '../../../../app.js';

export const useRaw = () => {
  app.use(express.raw({ type: '*/*', limit: '10mb' }));
};
