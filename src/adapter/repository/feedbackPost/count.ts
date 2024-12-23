import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';

type Params = Pick<AdapterParams, 'db'>;

export type Count = (
  params: {
    where?: Prisma.FeedbackPostWhereInput;
  },
  tx?: UnknownTx
) => Promise<number>;
export const buildCount = ({ db }: Params): Count => {
  return async (params, tx) => {
    const { where } = params;
    return await db.getContextClient(tx).feedbackPost.count({
      where,
    });
  };
};
