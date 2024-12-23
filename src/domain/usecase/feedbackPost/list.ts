import { UseCaseParams } from '@/domain/usecase/types';
import { Prisma } from '@prisma/client';
import { IFeedbackPostListOutput, SortByEnum } from './types';

export type List = (params: {
  category_id?: string;
  status_id?: string;
  sortBy?: SortByEnum
  skip?: number;
  take?: number;
}) => Promise<IFeedbackPostListOutput | never>;
export const buildList = ({ adapter }: UseCaseParams): List => {
  return async ({ category_id, status_id, sortBy, skip, take }) => {
    let orderBy: Prisma.FeedbackPostOrderByWithRelationInput = {};

    const where: Prisma.FeedbackPostWhereInput = {
      category_id,
      status_id,
    };

    if (sortBy) {
      switch (sortBy) {
      case SortByEnum.DateAsc:
        orderBy = { created_at: 'asc' };
        break;
      case SortByEnum.DateDesc:
        orderBy = { created_at: 'desc' };
        break;
      case SortByEnum.UpvoteAsc:
        orderBy = {
          upvotes: {
            _count: 'asc',
          },
        };
        break;
      case SortByEnum.UpvoteDesc:
        orderBy = {
          upvotes: {
            _count: 'desc',
          },
        };
        break;
      }
    }

    const feedbackPosts = await adapter.feedbackPostRepository.list({
      where,
      orderBy,
      skip,
      take,
    });
    const totalCount = await adapter.feedbackPostRepository.count({where});

    return {
      feedbackPosts,
      totalCount
    };
  };
};
