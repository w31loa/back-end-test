import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreate, Create } from './create';
import { buildGet, Get } from './get';
import { buildDelete, Delete } from './delete';
import { buildUpdate, Update } from './update';
import { buildList, List } from './list';

export type FeedbackPostUseCase = {
  create: Create;
  get: Get;
  deletePost: Delete
  update: Update
  list: List
};

export const buildFeedbackPostUseCase = (
  params: UseCaseParams
): FeedbackPostUseCase => {
  const create = buildCreate(params);
  const get = buildGet(params);
  const deletePost = buildDelete(params);
  const update = buildUpdate(params);
  const list = buildList(params)

  return {
    create,
    get,
    deletePost,
    update,
    list
  };
};
