import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IComment } from '@/domain/entity/comment';

type Params = Pick<AdapterParams, 'db'>;

export type List = (
  params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CommentWhereUniqueInput;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput;
  },
  tx?: UnknownTx
) => Promise<IComment[]>;
export const buildList = ({ db }: Params): List => {
  return async (params, tx) => {
    const { skip, take, cursor, where, orderBy } = params;
    return (await db.getContextClient(tx).comment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })) as IComment[];
  };
};
