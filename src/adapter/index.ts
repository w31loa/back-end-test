import { AdapterParams } from '@/adapter/types';
import {
  CommentRepository,
  buildCommentRepository,
} from './repository/comment';
import {
  FeedbackPostRepository,
  buildFeedbackPostRepository,
} from './repository/feedbackPost';
import { UpvoteRepository, buildUpvoteRepository } from './repository/upvote';
import { UserRepository, buildUserRepository } from './repository/user';

export type Adapter = {
  userRepository: UserRepository;
  feedbackPostRepository: FeedbackPostRepository;
  commentRepository: CommentRepository;
  upvoteRepository: UpvoteRepository;
};

export const buildAdapter = (params: AdapterParams): Adapter => {
  const userRepository = buildUserRepository(params);
  const feedbackPostRepository = buildFeedbackPostRepository(params);
  const commentRepository = buildCommentRepository(params);
  const upvoteRepository = buildUpvoteRepository(params);

  return {
    userRepository,
    feedbackPostRepository,
    commentRepository,
    upvoteRepository,
  };
};
