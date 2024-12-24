import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';

type Params = Pick<AdapterParams, 'db'>;

export type List = (
  params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FeedbackPostWhereUniqueInput;
    where?: Prisma.FeedbackPostWhereInput;
    orderBy?: Prisma.FeedbackPostOrderByWithRelationInput;
    include?: Prisma.FeedbackPostInclude;
  },
  tx?: UnknownTx
) => Promise<IFeedbackPost[]>;
export const buildList = ({ db }: Params): List => {
  return async (params, tx) => {
    const { skip, take, cursor, where, orderBy, include } = params;
    return (await db.getContextClient(tx).feedbackPost.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    })) as IFeedbackPost[];
  };
};
