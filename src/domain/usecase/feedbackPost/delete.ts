import { UseCaseParams } from '@/domain/usecase/types';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';
import { NotFoundError } from '@/domain/errors';

export type Delete = (params: { id: string , user_id: string}) => Promise<IFeedbackPost | never>;

export const buildDelete = ({ adapter }: UseCaseParams): Delete => {
  return async ({ id , user_id}) => {

    const postExists = await adapter.feedbackPostRepository.get({
      where: {
        id,
        user_id
      }
    })

    if(!postExists){
      throw new NotFoundError({
        code: 'FEEDBACK_POST_NOT_FOUND',
      });
    }

    await adapter.feedbackPostRepository.delete({
      id,
    });

    return postExists;
  };
};
