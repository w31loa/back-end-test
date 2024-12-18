import { AuthUseCase, buildAuthUseCase } from './auth';
import { buildFeedbackPostUseCase, FeedbackPostUseCase } from './feedbackPost';
import { UseCaseParams } from './types';

export type UseCase = {
  auth: AuthUseCase;
  feedbackPost: FeedbackPostUseCase;
};

export const buildUseCase = (params: UseCaseParams): UseCase => {
  const auth = buildAuthUseCase(params);
  const feedbackPost = buildFeedbackPostUseCase(params);

  return {
    auth,
    feedbackPost,
  };
};
