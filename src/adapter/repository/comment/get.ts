import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IComment } from '@/domain/entity/comment';

type Params = Pick<AdapterParams, 'db'>;

export type Get = (
  where: Prisma.CommentWhereUniqueInput,
  tx?: UnknownTx
) => Promise<IComment | null>;
export const buildGet = ({ db }: Params): Get => {
  return async (where, tx) => {
    return (await db
      .getContextClient(tx)
      .comment.findUnique({ where })) as IComment | null;
  };
};
