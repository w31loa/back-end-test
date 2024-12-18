import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';

type Params = Pick<AdapterParams, 'db'>;

export type Update = (
  where: Prisma.FeedbackPostWhereUniqueInput,
  data: Prisma.FeedbackPostUpdateInput,
  tx?: UnknownTx
) => Promise<IFeedbackPost | never>;
export const buildUpdate = ({ db }: Params): Update => {
  return async (where, data, tx) => {
    return (await db
      .getContextClient(tx)
      .feedbackPost.update({ where, data })) as IFeedbackPost;
  };
};
