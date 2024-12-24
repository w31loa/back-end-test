import { check, header } from 'express-validator'
import { authRequired, validateSchema } from '../../middlewares'

/**
 * @openapi
 * components:
 *   rules:
 *      vote:
 *          required:
 *             - feedbackPost_id
 *          properties:
 *             feedbackPost_id:
 *                type: string
 */
export const voteRules = [
  check('feedbackPost_id').exists().notEmpty().isString(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
]