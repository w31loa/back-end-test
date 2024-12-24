import { UseCaseParams } from '@/domain/usecase/types';
import { buildUpvote, Upvote } from './upvote';
import { buildDownvote, Downvote } from './downvote';

export type UpvoteUseCase = {
  upvote: Upvote;
  downvote: Downvote;
};

export const buildUpvoteUseCase = (
  params: UseCaseParams
): UpvoteUseCase => {
  const upvote = buildUpvote(params);
  const downvote = buildDownvote(params);

  return {
    upvote,
    downvote,
  };
};
