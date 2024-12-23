import { IFeedbackPost } from '@/domain/entity/feedbackPost';

export interface IFeedbackPostListOutput {
  feedbackPosts: IFeedbackPost[];
  totalCount: number;
}

export enum SortByEnum {
  DateAsc = 'DateAsc',
  DateDesc = 'DateDesc',
  UpvoteAsc = 'UpvoteAsc',
  UpvoteDesc = 'UpvoteDesc',
}