import { IUpvote } from '@/domain/entity/upvote';
import { UseCaseParams } from '../types';
import {
  InternalError,
  InvalidDataError,
  NotFoundError,
} from '@/domain/errors';

export type Upvote = (params: {
  feedbackPost_id: string;
  user_id: string;
}) => Promise<IUpvote>;

export const buildUpvote =
  ({ adapter }: UseCaseParams): Upvote =>
    async ({ user_id, feedbackPost_id }) => {
      const existingFeedbackPost = await adapter.feedbackPostRepository.get({
        where: {
          id: feedbackPost_id,
        },
      });

      if (!existingFeedbackPost) {
        throw new NotFoundError({
          code: 'FEEDBACK_POST_NOT_FOUND',
        });
      }

      const existingUpvote = await adapter.upvoteRepository.get({
        where: {
          post_id: feedbackPost_id,
          user_id,
        },
      });
      if (existingUpvote) {
        throw new InvalidDataError({
          code: 'UPVOTE_FOUND',
        });
      }

      const upvote = await adapter.upvoteRepository.create({
        data: {
          post_id: feedbackPost_id,
          user_id,
        },
      });

      if (!upvote) {
        throw new InternalError();
      }

      return upvote;
    };
