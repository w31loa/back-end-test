import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';

type Params = Pick<AdapterParams, 'db'>;

export type Get = (
  where: Prisma.FeedbackPostWhereUniqueInput,
  tx?: UnknownTx
) => Promise<IFeedbackPost | null>;
export const buildGet = ({ db }: Params): Get => {
  return async (where, tx) => {
    return (await db
      .getContextClient(tx)
      .feedbackPost.findUnique({ where })) as IFeedbackPost | null;
  };
};
