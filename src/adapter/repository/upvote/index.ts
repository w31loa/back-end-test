import { AdapterParams } from '@/adapter/types';
import { buildCreate, Create } from './create';
import { buildDelete, Delete } from './delete';

type Params = Pick<AdapterParams, 'db'>;

export type UpvoteRepository = {
  create: Create;
  delete: Delete;
};

export const buildUpvoteRepository = (params: Params): UpvoteRepository => {
  const create = buildCreate(params);
  const deleteUpvote = buildDelete(params);

  return {
    create,
    delete: deleteUpvote,
  };
};
