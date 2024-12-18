import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IComment } from '@/domain/entity/comment';

type Params = Pick<AdapterParams, 'db'>;

export type Create = (
  data: Prisma.CommentCreateArgs,
  tx?: UnknownTx
) => Promise<IComment | never>;
export const buildCreate = ({ db }: Params): Create => {
  return async (data, tx) => {
    return (await db.getContextClient(tx).comment.create(data)) as IComment;
  };
};
