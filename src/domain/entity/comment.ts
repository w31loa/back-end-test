import { Comment } from '@prisma/client';

export interface IComment extends Comment {}

/**
 * @openapi
 * components:
 *   entities:
 *      Comment:
 *          required:
 *            - id
 *            - created_at
 *          properties:
 *            id:
 *                type: integer
 *            content:
 *                type: string
 *            author_id:
 *                type: integer
 *            post_id:
 *                type: integer
 *            parent_comment_id:
 *                type: integer
 *                nullable: true
 *            created_at:
 *                type: string
 *                format: date
 *            updated_at:
 *                type: string
 *                format: date
 */
