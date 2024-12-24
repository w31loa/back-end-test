import { UseCaseParams } from '../types';
import { buildList, List } from './list';

export type StatusUseCase = {
  list: List;
};

export const buildStatusUseCase = (
  params: UseCaseParams
): StatusUseCase => {
  const list = buildList(params);

  return {
    list,
  };
};
