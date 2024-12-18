import { AdapterParams, UnknownTx } from '@/adapter/types';
import { IUpvote } from '@/domain/entity/upvote';

type Params = Pick<AdapterParams, 'db'>;

export type GetByPostAndUser = (
  postId: string,
  userId: string,
  tx?: UnknownTx
) => Promise<IUpvote | null>;
export const buildGetByPostAndUser = ({ db }: Params): GetByPostAndUser => {
  return async (postId, userId, tx) => {
    return (await db.getContextClient(tx).upvote.findFirst({
      where: { post_id: postId, user_id: userId },
    })) as IUpvote | null;
  };
};
