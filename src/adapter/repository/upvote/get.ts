import { AdapterParams, UnknownTx } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { IUpvote } from '@/domain/entity/upvote';

type Params = Pick<AdapterParams, 'db'>;

export type Get = (
  args: Prisma.UpvoteFindFirstArgs,
  tx?: UnknownTx
) => Promise<IUpvote | null>;
export const buildGet = ({ db }: Params): Get => {
  return async (args, tx) => {
    return (await db
      .getContextClient(tx)
      .upvote.findFirst(args)) as IUpvote | null;
  };
};
