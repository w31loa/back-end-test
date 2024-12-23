import { AdapterParams, UnknownTx } from '@/adapter/types';
import { IStatus } from '@/domain/entity/status';
import { Prisma } from '@prisma/client';

type Params = Pick<AdapterParams, 'db'>;

export type Get = (
  data: Prisma.CategoryFindFirstArgs,
  tx?: UnknownTx
) => Promise<IStatus | never>;

export const buildGet = ({ db }: Params): Get => {
  return async (data, tx) => {
    return (await db
      .getContextClient(tx)
      .category.findFirstOrThrow(data)) as IStatus;
  };
};
