import { check, header } from 'express-validator'
import { authRequired, validateSchema } from '../../middlewares'

/**
  * @openapi
  * components:
  *   rules:
  *      createFeedbackPost:
  *          required:
  *             - title
  *             - description
  *             - category_id
  *             - status_id
  *             - user_id
  *          properties:
  *             title:
  *                type: string
  *             description:
  *                type: string
  *             category_id:
  *                type: string
  *             status_id:
  *                type: string
  */
export const createRules = [
  check('title').exists().notEmpty().isString(),
  check('description').exists().notEmpty().isString(),
  check('category_id').exists().notEmpty().isString(),
  check('status_id').exists().notEmpty().isString(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];

