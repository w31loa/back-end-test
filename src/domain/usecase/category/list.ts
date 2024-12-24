import { ICategory } from '@/domain/entity/category';
import { UseCaseParams } from '@/domain/usecase/types';

export type List = () => Promise<ICategory[] | never>;
export const buildList = ({ adapter }: UseCaseParams): List => {
  return async () => {
    return await adapter.categoryRepository.list({});
  };
};
