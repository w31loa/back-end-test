import Express from 'express';
import { DeliveryParams } from '@/delivery/types';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';
import { buildList, List } from './list';

type Params = Pick<DeliveryParams, 'status'>;

export type StatusMethods = {
  list: List;
};

const buildRegisterRoutes = (methods: StatusMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router();

    /**
     * @openapi
     * paths:
     *   /status/list:
     *     get:
     *       tags:
     *         - Status
     *       summary: Получить список статусов
     *       description: Возвращает список всех доступных статусов для постов.
     *       responses:
     *         200:
     *           description: Список статусов.
     *           content:
     *             application/json:
     *               schema:
     *                 type: array
     *                 items:
     *                   $ref: '#/components/entities/Status'
     *         500:
     *           description: Ошибка сервера.
     */
    namespace.get('/list', createRouteHandler(methods.list));

    root.use('/status', namespace);
  };
};

export const buildStatusHandler = (params: Params): IHandler => {
  const list = buildList(params);

  return {
    registerRoutes: buildRegisterRoutes({
      list,
    }),
  };
};
