import Express from 'express';
import { DeliveryParams } from '@/delivery/types';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';
import { buildUpvote, Upvote } from './upvote';
import { buildDownvote, Downvote } from './downvote';
import { voteRules } from './rules';
import { deleteRules } from '../feedbackPost/rules';

type Params = Pick<DeliveryParams, 'upvote'>;

export type UpvoteMethods = {
  upvote: Upvote;
  downvote: Downvote;
};

const buildRegisterRoutes = (methods: UpvoteMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router();

    /**
     * @openapi
     * paths:
     *   /upvote/upvote:
     *     post:
     *       tags:
     *         - Upvote
     *       summary: Проголосовать за пост
     *       description: Позволяет пользователю проголосовать (upvote) за пост, передав его ID.
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/rules/vote'
     *       responses:
     *         200:
     *           description: Успешное голосование (upvote) за пост.
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: '#/components/entities/Upvote'
     *         400:
     *           description: Некорректные данные в теле запроса.
     *         401:
     *           description: Неавторизованный запрос. Требуется авторизация.
     *         404:
     *           description: Пост с указанным ID не найден.
     *         500:
     *           description: Ошибка сервера.
     */

    namespace.post('/upvote', voteRules, createRouteHandler(methods.upvote));

    /**
     * @openapi
     * paths:
     *   /upvote/downvote:
     *     delete:
     *       tags:
     *         - Upvote
     *       summary: Снять голос за пост (downvote)
     *       description: Позволяет пользователю снять голос (downvote) за пост, передав его ID.
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/rules/vote'
     *       responses:
     *         200:
     *           description: Успешное снятие голоса (downvote) с поста.
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: '#/components/entities/Upvote'
     *         400:
     *           description: Некорректные данные в теле запроса.
     *         401:
     *           description: Неавторизованный запрос. Требуется авторизация.
     *         404:
     *           description: Пост с указанным ID не найден.
     *         500:
     *           description: Ошибка сервера.
     */
    namespace.delete(
      '/downvote',
      deleteRules,
      createRouteHandler(methods.downvote)
    );

    root.use('/upvote', namespace);
  };
};

export const buildUpvoteHandler = (params: Params): IHandler => {
  const upvote = buildUpvote(params);
  const downvote = buildDownvote(params);

  return {
    registerRoutes: buildRegisterRoutes({
      upvote,
      downvote,
    }),
  };
};
