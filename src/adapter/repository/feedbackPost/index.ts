import { AdapterParams } from '@/adapter/types';
import { buildCreate, Create } from './create';
import { buildDelete, Delete } from './delete';
import { buildGet, Get } from './get';
import { buildList, List } from './list';
import { buildUpdate, Update } from './update';
import { buildCount, Count } from './count';

type Params = Pick<AdapterParams, 'db'>;

export type FeedbackPostRepository = {
  create: Create;
  delete: Delete;
  get: Get;
  list: List;
  update: Update;
  count: Count;
};

export const buildFeedbackPostRepository = (
  params: Params
): FeedbackPostRepository => {
  const create = buildCreate(params);
  const deleteFeedbackPost = buildDelete(params);
  const get = buildGet(params);
  const list = buildList(params);
  const update = buildUpdate(params);
  const count = buildCount(params);

  return {
    create,
    delete: deleteFeedbackPost,
    get,
    list,
    update,
    count,
  };
};
