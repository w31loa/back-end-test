import { IUpvote } from '@/domain/entity/upvote';
import { UseCaseParams } from '../types';
import { NotFoundError } from '@/domain/errors';

export type Downvote = (params: {
  feedbackPost_id: string;
  user_id: string;
}) => Promise<IUpvote | never>;

export const buildDownvote =
  ({ adapter }: UseCaseParams): Downvote =>
    async ({ user_id, feedbackPost_id }) => {
      const existingUpvote = await adapter.upvoteRepository.get({
        where: {
          post_id: feedbackPost_id,
          user_id,
        },
      });
      if (!existingUpvote) {
        throw new NotFoundError({
          code: 'UPVOTE_NOT_FOUND',
        });
      }

      await adapter.upvoteRepository.delete({
        user_id_post_id: {
          user_id,
          post_id: feedbackPost_id,
        },
      });

      return existingUpvote ;
    };
