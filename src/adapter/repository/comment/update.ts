import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IComment } from '@/domain/entity/comment';

type Params = Pick<AdapterParams, 'db'>;

export type Update = (
  where: Prisma.CommentWhereUniqueInput,
  data: Prisma.CommentUpdateInput,
  tx?: UnknownTx
) => Promise<IComment | never>;
export const buildUpdate = ({ db }: Params): Update => {
  return async (where, data, tx) => {
    return (await db
      .getContextClient(tx)
      .comment.update({ where, data })) as IComment;
  };
};
