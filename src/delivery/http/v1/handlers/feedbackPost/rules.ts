import { check, header } from 'express-validator';
import { authRequired, validateSchema } from '../../middlewares';
import { SortByEnum } from '@/domain/usecase/feedbackPost/types';

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
  validateSchema,
];


/**
 * @openapi
 * components:
 *   rules:
 *      updateFeedbackPost:
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

export const updateRules = [
  check('title').isString().optional(),
  check('description').isString().optional(),
  check('category_id').isString().optional(),
  check('status_id').isString().optional(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema,
];

export const deleteRules = [authRequired({})];

/**
 * @openapi
 * components:
 *   rules:
 *      listFeedbackPost:
 *          properties:
 *             category_id:
 *                type: string
 *             status_id:
 *                type: string
 *             sortBy:
 *                type: string
 *                enum: [DateAsc, DateDesc, UpvoteAsc, UpvoteDesc]
 */
export const listRules = [
  check('category_id').isString().optional(),
  check('status_id').isString().optional(),
  check('sortBy').optional().isString().isIn(Object.values(SortByEnum)),
  validateSchema,
]
