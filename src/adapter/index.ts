import { buildStatusRepository, StatusRepository } from './repository/status/index';
import { buildCategoryRepository, CategoryRepository } from './repository/category/index';
import { AdapterParams } from '@/adapter/types';
import {
  FeedbackPostRepository,
  buildFeedbackPostRepository,
} from './repository/feedbackPost';
import { UpvoteRepository, buildUpvoteRepository } from './repository/upvote';
import { UserRepository, buildUserRepository } from './repository/user';

export type Adapter = {
  userRepository: UserRepository;
  feedbackPostRepository: FeedbackPostRepository;
  categoryRepository: CategoryRepository;
  statusRepository: StatusRepository;
  upvoteRepository: UpvoteRepository;
};

export const buildAdapter = (params: AdapterParams): Adapter => {
  const userRepository = buildUserRepository(params);
  const feedbackPostRepository = buildFeedbackPostRepository(params);
  const categoryRepository = buildCategoryRepository(params);
  const statusRepository = buildStatusRepository(params);
  const upvoteRepository = buildUpvoteRepository(params);

  return {
    userRepository,
    feedbackPostRepository,
    categoryRepository,
    statusRepository,
    upvoteRepository,
  };
};
