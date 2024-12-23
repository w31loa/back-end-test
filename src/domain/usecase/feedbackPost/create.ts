import { UseCaseParams } from '../types';
import { InternalError, InvalidDataError } from '@/domain/errors';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';

export type Create = (params: {
  title: string;
  description: string;
  status_id: string;
  category_id: string;
  user_id: string;
}) => Promise<{
  feedbackPost: IFeedbackPost;
}>;

export const buildCreate =
  ({ adapter }: UseCaseParams): Create =>
    async ({ title, description, status_id, category_id, user_id }) => {
      const existingFeedbackPost = await adapter.feedbackPostRepository.get({
        where: {
          title,
        },
      });

      if (existingFeedbackPost) {
        throw new InvalidDataError({
          code: 'FEEDBACK_POST_FOUND',
        });
      }

      const feedbackPost = await adapter.feedbackPostRepository.create({
        data: {
          title,
          description,
          category_id,
          user_id,
          status_id,
        },
        select: {
          id: true,
        },
      });

      if (!feedbackPost) {
        throw new InternalError();
      }

      return { feedbackPost };
    };
