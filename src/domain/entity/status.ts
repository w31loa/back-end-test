import { Status } from '@prisma/client';

export interface IStatus extends Status {}

/**
 * @openapi
 * components:
 *   entities:
 *      Status:
 *          required:
 *            - id
 *            - name
 *            - created_at
 *          properties:
 *            id:
 *                type: integer
 *            name:
 *                type: string
 *            created_at:
 *                type: string
 *                format: date
 *            updated_at:
 *                type: string
 *                format: date
 */
