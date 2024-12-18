import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IComment } from '@/domain/entity/comment';

type Params = Pick<AdapterParams, 'db'>;

export type Delete = (
  where: Prisma.CommentWhereUniqueInput,
  tx?: UnknownTx
) => Promise<IComment | never>;
export const buildDelete = ({ db }: Params): Delete => {
  return async (where, tx) => {
    return (await db
      .getContextClient(tx)
      .comment.delete({ where })) as IComment;
  };
};
