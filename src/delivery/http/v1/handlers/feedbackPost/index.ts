import Express from 'express';
import { DeliveryParams } from '@/delivery/types';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';
import { buildCreate, Create } from './create';
import { createRules, deleteRules, listRules, updateRules } from './rules';
import { buildGet, Get } from './get';
import { buildDelete, Delete } from './delete';
import { buildUpdate, Update } from './update';
import { buildList, List } from './list';

type Params = Pick<DeliveryParams, 'feedbackPost'>;

export type FeedbackPostMethods = {
  create: Create;
  get: Get;
  deletePost: Delete;
  update: Update;
  list: List;
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

    /**
     * @openapi
     * /feedbackPost/get/{id}:
     *   get:
     *     tags: [FeedbackPost]
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *        200:
     *           description: Feedback post fined.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    post:
     *                      $ref: '#/components/entities/FeedbackPost'
     */
    namespace.get(
      '/get/:id',
      createRouteHandler(methods.get)
    )

    namespace.get(
      '/list',
      listRules,
      createRouteHandler(methods.list)
    )

    
    /**
     * @openapi
     * /feedbackPost/delete/{id}:
     *   delete:
     *     tags:
     *       - FeedbackPost
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *        200:
     *           description: Feedback post deleted.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    post:
     *                      $ref: '#/components/entities/FeedbackPost'
     */
    namespace.delete(
      '/delete/:id', 
      deleteRules,
      createRouteHandler(methods.deletePost)
    )


    /**
     * @openapi
     * /feedbackPost/update/{id}:
     *   patch:
     *     tags: [FeedbackPost]
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/updateFeedbackPost'
     *     responses:
     *        200:
     *           description: Updated feedbackPost.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    post:
     *                      $ref: '#/components/entities/FeedbackPost'
     */
    namespace.patch(
      '/update/:id',
      updateRules,
      createRouteHandler(methods.update)
    )


    root.use('/feedbackPost', namespace)
  }
}

export const buildFeedbackPostHandler = (params: Params): IHandler => {
  const create = buildCreate(params)
  const get = buildGet(params)
  const deletePost = buildDelete(params)
  const update = buildUpdate(params)
  const list = buildList(params)

  return {
    registerRoutes: buildRegisterRoutes(
      {
        create,
        get,
        deletePost,
        update,
        list
      }
    )
  }
}
