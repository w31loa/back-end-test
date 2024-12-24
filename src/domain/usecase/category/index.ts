import { UseCaseParams } from '../types';
import { buildList, List } from './list';

export type CategoryUseCase = {
  list: List;
};

export const buildCategoryUseCase = (
  params: UseCaseParams
): CategoryUseCase => {
  const list = buildList(params);

  return {
    list,
  };
};
