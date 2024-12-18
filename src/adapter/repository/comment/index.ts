import { AdapterParams } from '@/adapter/types';
import { buildCreate, Create } from './create';
import { buildDelete, Delete } from './delete';
import { buildGet, Get } from './get';
import { buildList, List } from './list';
import { buildUpdate, Update } from './update';

type Params = Pick<AdapterParams, 'db'>;

export type CommentRepository = {
  create: Create;
  delete: Delete;
  get: Get;
  list: List;
  update: Update;
};

export const buildCommentRepository = (params: Params): CommentRepository => {
  const create = buildCreate(params);
  const deleteComment = buildDelete(params);
  const get = buildGet(params);
  const list = buildList(params);
  const update = buildUpdate(params);

  return {
    create,
    delete: deleteComment,
    get,
    list,
    update,
  };
};
