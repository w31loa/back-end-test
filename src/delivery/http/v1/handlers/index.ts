import Express from 'express';
import { IHandler } from './types';
import { DeliveryParams } from '@/delivery/types';
import { buildAuthHandler } from './auth';
import { buildFeedbackPostHandler } from './feedbackPost';

export const buildHandler = (params: DeliveryParams): Express.Router => {
  const router = Express.Router();

  const handlers: Array<IHandler> = [
    buildAuthHandler(params),
    buildFeedbackPostHandler(params),
  ];

  for (let i = 0; i < handlers.length; i++) {
    const handler = handlers[i];

    handler.registerRoutes(router);
  }

  return router;
};
