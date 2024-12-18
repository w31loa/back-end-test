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
 *                type: string
 *            title:
 *                type: string
 *            description:
 *                type: string
 *            category_id:
 *                type: string
 *            status_id:
 *                type: string
 *            user_id:
 *                type: string
 *            created_at:
 *                type: string
 *                format: date
 *            updated_at:
 *                type: string
 *                format: date
 */
