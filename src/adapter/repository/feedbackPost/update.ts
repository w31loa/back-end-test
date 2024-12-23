import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';

type Params = Pick<AdapterParams, 'db'>;

export type Update = (
  data: Prisma.FeedbackPostUpdateArgs,
  tx?: UnknownTx
) => Promise<IFeedbackPost | never>;
export const buildUpdate = ({ db }: Params): Update => {
  return async (data, tx) => {
    return (await db
      .getContextClient(tx)
      .feedbackPost.update(data)) as IFeedbackPost;
  };
};
