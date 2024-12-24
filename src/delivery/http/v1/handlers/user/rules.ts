import { header } from 'express-validator';
import { authRequired, validateSchema } from '../../middlewares';
import { uploadMiddleware } from '../../middlewares/validateUpload';
import { validateAvatarMiddleware } from '../../middlewares/validateAvatar';

export const updateAvatarRules = [
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  uploadMiddleware,
  validateAvatarMiddleware,
  validateSchema,
];
