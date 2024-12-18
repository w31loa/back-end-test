import { Category } from '@prisma/client';

export interface ICategory extends Category {}

/**
 * @openapi
 * components:
 *   entities:
 *      Category:
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
