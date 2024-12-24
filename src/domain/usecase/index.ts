import { AuthUseCase, buildAuthUseCase } from './auth';
import { buildCategoryUseCase, CategoryUseCase } from './category';
import { buildFeedbackPostUseCase, FeedbackPostUseCase } from './feedbackPost';
import { buildStatusUseCase, StatusUseCase } from './status';
import { UseCaseParams } from './types';
import { buildUpvoteUseCase, UpvoteUseCase } from './upvote';
import { buildUserUseCase, UserUseCase } from './user';

export type UseCase = {
  auth: AuthUseCase;
  feedbackPost: FeedbackPostUseCase;
  upvote: UpvoteUseCase;
  status: StatusUseCase;
  category: CategoryUseCase;
  user: UserUseCase;
};

export const buildUseCase = (params: UseCaseParams): UseCase => {
  const auth = buildAuthUseCase(params);
  const feedbackPost = buildFeedbackPostUseCase(params);
  const upvote = buildUpvoteUseCase(params);
  const status = buildStatusUseCase(params);
  const category = buildCategoryUseCase(params);
  const user = buildUserUseCase(params);

  return {
    auth,
    feedbackPost,
    upvote,
    status,
    category,
    user,
  };
};
