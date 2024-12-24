import { IFeedbackPost } from '@/domain/entity/feedbackPost';

export interface IFeedbackPostListOutput {
  feedbackPosts: IFeedbackPost[];
  totalCount: number;
}
/**
 * @openapi
 * components:
 *   entities:
 *     FeedbackPostListOutput:
 *       required:
 *         - feedbackPosts
 *         - totalCount
 *       properties:
 *         feedbackPosts:
 *           type: array
 *           items:
 *             $ref: '#/components/entities/FeedbackPost'
 *           description: Массив объектов отзывов
 *         totalCount:
 *           type: integer
 *           description: Общее количество отзывов
 */


export enum SortByEnum {
  DateAsc = 'DateAsc',
  DateDesc = 'DateDesc',
  UpvoteAsc = 'UpvoteAsc',
  UpvoteDesc = 'UpvoteDesc',
}
/**
 * @openapi
 * components:
 *   schemas:
 *     SortByEnum:
 *       type: string
 *       enum:
 *         - DateAsc
 *         - DateDesc
 *         - UpvoteAsc
 *         - UpvoteDesc
 *       description: Критерии сортировки отзывов
 */
