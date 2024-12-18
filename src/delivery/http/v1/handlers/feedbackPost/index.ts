import Express from 'express';
import { DeliveryParams } from '@/delivery/types';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';
import { buildCreate, Create } from './create';
import { createRules } from './rules';

type Params = Pick<DeliveryParams, 'feedbackPost'>;

export type FeedbackPostMethods = {
  create: Create;
}

const buildRegisterRoutes = (methods: FeedbackPostMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router()

    /**
     * @openapi
     * /feedbackPost/create:
     *   post:
     *     tags: [FeedbackPost]
     *     produces:
     *       - application/json
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/createFeedbackPost'
     *     responses:
     *        201:
     *           description: Created feedbackPost.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    post:
     *                      $ref: '#/components/entities/FeedbackPost'
     */
    namespace.post(
      '/create',
      createRules,
      createRouteHandler(methods.create)
    )


    root.use('/feedbackPost', namespace)
  }
}

export const buildFeedbackPostHandler = (params: Params): IHandler => {
  const create = buildCreate(params)
  // const refresh = buildRefresh(params)
  // const authorize = buildAuthorize(params)
  // const register = buildRegister(params)

  return {
    registerRoutes: buildRegisterRoutes(
      {
        create
      }
    )
  }
}
