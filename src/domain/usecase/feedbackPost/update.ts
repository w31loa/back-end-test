import { UseCaseParams } from '@/domain/usecase/types';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';
import { InvalidDataError, NotFoundError } from '@/domain/errors';

export type Update = (params: {
  id: string;
  title?: string;
  description?: string;
  category_id?: string;
  status_id?: string;
  user_id: string;
}) => Promise<IFeedbackPost | never>;

export const buildUpdate = ({ adapter }: UseCaseParams): Update => {
  return async ({
    id,
    title,
    description,
    category_id,
    status_id,
    user_id,
  }) => {
    const postExists = await adapter.feedbackPostRepository.get({
      where: {
        id,
        user_id,
      },
    });

    if (!postExists) {
      if (!postExists) {
        throw new NotFoundError({
          code: 'FEEDBACK_POST_NOT_FOUND',
        });
      }
    }

    if (category_id) {
      const categoryExists = await adapter.categoryRepository.get({
        where: {
          id,
        },
      });
      if (!categoryExists) {
        throw new InvalidDataError({
          code: 'CATEGORY_DOES_NOT_EXISTS',
        });
      }
    }
    if (status_id) {
      const statusExists = await adapter.statusRepository.get({
        where: {
          id,
        },
      });
      if (!statusExists) {
        throw new InvalidDataError({
          code: 'STATUS_DOES_NOT_EXISTS',
        });
      }
    }

    const post = await adapter.feedbackPostRepository.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        category_id,
        status_id,
      },
    });

    return post;
  };
};
