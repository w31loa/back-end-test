import { AuthUseCase, buildAuthUseCase } from './auth';
import { buildFeedbackPostUseCase, FeedbackPostUseCase } from './feedbackPost';
import { UseCaseParams } from './types';
import { buildUpvoteUseCase, UpvoteUseCase } from './upvote';

export type UseCase = {
  auth: AuthUseCase;
  feedbackPost: FeedbackPostUseCase;
  upvoteUseCase: UpvoteUseCase;
};

export const buildUseCase = (params: UseCaseParams): UseCase => {
  const auth = buildAuthUseCase(params);
  const feedbackPost = buildFeedbackPostUseCase(params);
  const upvoteUseCase = buildUpvoteUseCase(params);

  return {
    auth,
    feedbackPost,
    upvoteUseCase,
  };
};
