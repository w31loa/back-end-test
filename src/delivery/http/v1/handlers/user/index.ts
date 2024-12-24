import Express from 'express';
import { DeliveryParams } from '@/delivery/types';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';
import { buildUpdateAvatar, UpdateAvatar } from './updateAvatar';
import { updateAvatarRules } from './rules';
import multer from 'multer';

type Params = Pick<DeliveryParams, 'user'>;

export type UserMethods = {
  updateAvatar: UpdateAvatar;
};

const buildRegisterRoutes = (methods: UserMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router();

    /**
     * @openapi
     * paths:
     *   user/updateAvatar:
     *     patch:
     *       tags:
     *         - User
     *       summary: Обновить аватар пользователя
     *       description: Обновляет аватар пользователя, загружая новый файл изображения.
     *       requestBody:
     *         required: true
     *         content:
     *           multipart/form-data:
     *             schema:
     *               type: object
     *               properties:
     *                 file:
     *                   type: string
     *                   format: binary
     *                   description: Файл изображения для обновления аватара.
     *       responses:
     *         200:
     *           description: Аватар успешно обновлен.
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: '#/components/entities/User'
     *         400:
     *           description: Ошибка в запросе (например, файл не был отправлен).
     *         401:
     *           description: Неавторизованный запрос.
     *         500:
     *           description: Ошибка сервера.
     */

    namespace.patch(
      '/updateAvatar',
      multer().single('file'),
      updateAvatarRules,
      createRouteHandler(methods.updateAvatar)
    );

    root.use('/user', namespace);
  };
};

export const buildUserHandler = (params: Params): IHandler => {
  const updateAvatar = buildUpdateAvatar(params);

  return {
    registerRoutes: buildRegisterRoutes({
      updateAvatar,
    }),
  };
};
