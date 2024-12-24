import Express from 'express';
import { IHandler } from './types';
import { DeliveryParams } from '@/delivery/types';
import { buildAuthHandler } from './auth';
import { buildFeedbackPostHandler } from './feedbackPost';
import { buildUpvoteHandler } from './upvote';
import { buildStatusHandler } from './status';
import { buildCategoryHandler } from './category';
import { buildUserHandler } from './user';

export const buildHandler = (params: DeliveryParams): Express.Router => {
  const router = Express.Router();

  const handlers: Array<IHandler> = [
    buildAuthHandler(params),
    buildFeedbackPostHandler(params),
    buildUpvoteHandler(params),
    buildStatusHandler(params),
    buildCategoryHandler(params),
    buildUserHandler(params)
  ];

  for (let i = 0; i < handlers.length; i++) {
    const handler = handlers[i];

    handler.registerRoutes(router);
  }

  return router;
};
