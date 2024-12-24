import Express from 'express';
import { buildList, List } from './list';
import { DeliveryParams } from '@/delivery/types';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'category'>;

export type CategoryMethods = {
  list: List;

}

const buildCategoryRoutes = (methods: CategoryMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router()
    

    /**
     * @openapi
     * paths:
     *   /category/list:
     *     get:
     *       tags:
     *         - Category
     *       summary: Получить список категорий
     *       description: Возвращает список всех доступных категорий для постов.
     *       responses:
     *         200:
     *           description: Список категорий.
     *           content:
     *             application/json:
     *               schema:
     *                 type: array
     *                 items:
     *                   $ref: '#/components/entities/Category'
     *         500:
     *           description: Ошибка сервера.
     */
    namespace.get(
      '/list',
      createRouteHandler(methods.list)
    )

    root.use('/category', namespace)
  }
}

export const buildCategoryHandler = (params: Params): IHandler => {
  const list = buildList(params)


  return {
    registerRoutes: buildCategoryRoutes(
      {
        list
      }
    )
  }
}