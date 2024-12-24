import { IStatus } from '@/domain/entity/status';
import { UseCaseParams } from '@/domain/usecase/types';

export type List = () => Promise<IStatus[] | never>;
export const buildList = ({ adapter }: UseCaseParams): List => {
  return async () => {
    return await adapter.statusRepository.list({});
  };
};
