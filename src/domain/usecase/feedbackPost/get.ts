import { NotFoundError } from '@/domain/errors';
import { UseCaseParams } from '../types';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';

export type Get = (data: { id: string }) => Promise<IFeedbackPost | never>;

export const buildGet = ({ adapter }: UseCaseParams): Get => {
  return async ({ id }) => {
    const feedbackPost = await adapter.feedbackPostRepository.get({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        category: true,
        description: true,
        status: true,
        created_at: true,
        upvotes: true
      },
    });
    console.log(id)
    if (!feedbackPost) {
      throw new NotFoundError({
        code: 'FEEDBACK_POST_NOT_FOUND',
      });
    }

    return feedbackPost;
  };
};
