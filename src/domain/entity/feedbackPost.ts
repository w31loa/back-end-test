import { FeedbackPost } from '@prisma/client';

export interface IFeedbackPost extends FeedbackPost {}

/**
 * @openapi
 * components:
 *   entities:
 *      FeedbackPost:
 *          required:
 *            - id
 *            - created_at
 *          properties:
 *            id:
 *                type: integer
 *            title:
 *                type: string
 *            description:
 *                type: string
 *            category_id:
 *                type: integer
 *            status_id:
 *                type: integer
 *            author_id:
 *                type: integer
 *            created_at:
 *                type: string
 *                format: date
 *            updated_at:
 *                type: string
 *                format: date
 */
