import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IUpvote } from '@/domain/entity/upvote';

type Params = Pick<AdapterParams, 'db'>;

export type Delete = (
  where: Prisma.UpvoteWhereUniqueInput,
  tx?: UnknownTx
) => Promise<IUpvote | never>;
export const buildDelete = ({ db }: Params): Delete => {
  return async (where, tx) => {
    return (await db.getContextClient(tx).upvote.delete({ where })) as IUpvote;
  };
};
