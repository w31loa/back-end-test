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
};

const buildRegisterRoutes = (methods: FeedbackPostMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router();

    /**
     * @openapi
     * paths:
     *   /feedbackPost/create:
     *     post:
     *       tags:
     *         - FeedbackPost
     *       summary: Создать новый пост
     *       description: Создает новый пост с переданными данными.
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/rules/createFeedbackPost'
     *       responses:
     *         201:
     *           description: Пост успешно создан.
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: '#/components/entities/FeedbackPost'
     *         400:
     *           description: Некорректные данные в теле запроса.
     *         401:
     *           description: Неавторизованный запрос. Требуется авторизация.
     *         500:
     *           description: Ошибка сервера.
     */
    namespace.post('/create', createRules, createRouteHandler(methods.create));

    /**
     * @openapi
     * paths:
     *   /feedbackPost/get/{id}:
     *     get:
     *       tags:
     *         - FeedbackPost
     *       summary: Получить пост по его ID
     *       description: Возвращает пост с переданным идентификатором. Если пост не найден, возвращает ошибку.
     *       parameters:
     *         - in: path
     *           name: id
     *           required: true
     *           schema:
     *             type: string
     *           description: Идентификатор поста, который нужно получить.
     *       responses:
     *         200:
     *           description: Пост найден и успешно возвращен.
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: '#/components/entities/FeedbackPost'
     *         404:
     *           description: Пост с таким ID не найден.
     *         500:
     *           description: Ошибка сервера.
     */
    namespace.get('/get/:id', createRouteHandler(methods.get));

    /**
     * @openapi
     * /feedbackPost/list:
     *   get:
     *     tags:
     *       - FeedbackPost
     *     summary: Получить список отзывов
     *     parameters:
     *       - name: category_id
     *         in: query
     *         required: false
     *         schema:
     *           type: string
     *         description: ID категории для фильтрации
     *       - name: status_id
     *         in: query
     *         required: false
     *         schema:
     *           type: string
     *         description: ID статуса для фильтрации
     *       - name: sortBy
     *         in: query
     *         required: false
     *         schema:
     *           $ref: '#/components/schemas/SortByEnum'
     *         description: Критерий сортировки
     *       - name: skip
     *         in: query
     *         required: false
     *         schema:
     *           type: integer
     *           minimum: 0
     *         description: Сколько элементов пропустить для пагинации
     *       - name: take
     *         in: query
     *         required: false
     *         schema:
     *           type: integer
     *           minimum: 1
     *         description: Сколько элементов вернуть для пагинации
     *     responses:
     *       200:
     *         description: Список отзывов
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/entities/FeedbackPostListOutput'
     */
    namespace.get('/list', listRules, createRouteHandler(methods.list));

    /**
     * @openapi
     * paths:
     *   /feedbackPost/delete/{id}:
     *     delete:
     *       tags:
     *         - FeedbackPost
     *       summary: Удалить пост по его ID
     *       description: Удаляет конкретный пост из базы данных по его ID.
     *       parameters:
     *         - in: path
     *           name: id
     *           required: true
     *           schema:
     *             type: string
     *           description: Идентификатор поста, который нужно удалить.
     *       responses:
     *         200:
     *           description: Пост успешно удален.
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: '#/components/entities/FeedbackPost'
     *         404:
     *           description: Пост с таким ID не найден.
     *         500:
     *           description: Ошибка сервера.
     */
    namespace.delete(
      '/delete/:id',
      deleteRules,
      createRouteHandler(methods.deletePost)
    );

    /**
     * @openapi
     * paths:
     *   /feedbackPost/update/{id}:
     *     patch:
     *       tags:
     *         - FeedbackPost
     *       summary: Обновить пост по его ID
     *       description: Обновляет информацию о посте по его ID. Требует передачи новых данных в теле запроса.
     *       parameters:
     *         - in: path
     *           name: id
     *           required: true
     *           schema:
     *             type: string
     *           description: Идентификатор поста, который нужно обновить.
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 title:
     *                   type: string
     *                   description: Заголовок поста
     *                 description:
     *                   type: string
     *                   description: Описание поста
     *                 category_id:
     *                   type: string
     *                   description: Идентификатор категории
     *                 status_id:
     *                   type: string
     *                   description: Идентификатор статуса
     *       responses:
     *         200:
     *           description: Пост успешно обновлен.
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: '#/components/entities/FeedbackPost'
     *         404:
     *           description: Пост с таким ID не найден.
     *         400:
     *           description: Некорректные данные в теле запроса.
     *         500:
     *           description: Ошибка сервера.
     */
    namespace.patch(
      '/update/:id',
      updateRules,
      createRouteHandler(methods.update)
    );

    root.use('/feedbackPost', namespace);
  };
};

export const buildFeedbackPostHandler = (params: Params): IHandler => {
  const create = buildCreate(params);
  const get = buildGet(params);
  const deletePost = buildDelete(params);
  const update = buildUpdate(params);
  const list = buildList(params);

  return {
    registerRoutes: buildRegisterRoutes({
      create,
      get,
      deletePost,
      update,
      list,
    }),
  };
};
