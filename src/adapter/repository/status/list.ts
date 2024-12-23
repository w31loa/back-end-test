import { AdapterParams, UnknownTx } from '@/adapter/types';
import { IStatus } from '@/domain/entity/status';
import { Prisma } from '@prisma/client';

type Params = Pick<AdapterParams, 'db'>;

export type List = (
  data: Prisma.CategoryFindFirstArgs,
  tx?: UnknownTx
) => Promise<IStatus[] | never>;

export const buildList = ({ db }: Params): List => {
  return async (data, tx) => {
    return (await db.getContextClient(tx).category.findMany(data)) as IStatus[];
  };
};
