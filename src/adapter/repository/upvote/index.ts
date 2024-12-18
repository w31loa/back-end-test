import { AdapterParams } from '@/adapter/types';
import { buildCreate, Create } from './create';
import { buildDelete, Delete } from './delete';
import { buildGetByPostAndUser, GetByPostAndUser } from './getByPostAndUser';

type Params = Pick<AdapterParams, 'db'>;

export type UpvoteRepository = {
  create: Create;
  delete: Delete;
  getByPostAndUser: GetByPostAndUser;
};

export const buildUpvoteRepository = (params: Params): UpvoteRepository => {
  const create = buildCreate(params);
  const deleteUpvote = buildDelete(params);
  const getByPostAndUser = buildGetByPostAndUser(params);

  return {
    create,
    delete: deleteUpvote,
    getByPostAndUser,
  };
};
