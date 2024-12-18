import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';

type Params = Pick<AdapterParams, 'db'>;

export type Get = (
  args: Prisma.FeedbackPostFindFirstArgs,
  tx?: UnknownTx
) => Promise<IFeedbackPost | null>;
export const buildGet = ({ db }: Params): Get => {
  return async (args, tx) => {
    return (await db
      .getContextClient(tx)
      .feedbackPost.findFirst(args)) as IFeedbackPost | null;
  };
};
