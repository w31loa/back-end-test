import { Upvote } from '@prisma/client';

export interface IUpvote extends Upvote {}

/**
 * @openapi
 * components:
 *   entities:
 *      Upvote:
 *          required:
 *            - id
 *            - post_id
 *            - user_id
 *          properties:
 *            id:
 *                type: integer
 *            post_id:
 *                type: integer
 *            user_id:
 *                type: integer
 */
