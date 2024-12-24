import { AuthUseCase, buildAuthUseCase } from './auth';
import { buildCategoryUseCase, CategoryUseCase } from './category';
import { buildFeedbackPostUseCase, FeedbackPostUseCase } from './feedbackPost';
import { buildStatusUseCase, StatusUseCase } from './status';
import { UseCaseParams } from './types';
import { buildUpvoteUseCase, UpvoteUseCase } from './upvote';

export type UseCase = {
  auth: AuthUseCase;
  feedbackPost: FeedbackPostUseCase;
  upvote: UpvoteUseCase;
  status: StatusUseCase;
  category: CategoryUseCase;
};

export const buildUseCase = (params: UseCaseParams): UseCase => {
  const auth = buildAuthUseCase(params);
  const feedbackPost = buildFeedbackPostUseCase(params);
  const upvote = buildUpvoteUseCase(params);
  const status = buildStatusUseCase(params);
  const category = buildCategoryUseCase(params);

  return {
    auth,
    feedbackPost,
    upvote,
    status,
    category,
  };
};
