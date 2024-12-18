import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreate, Create } from './create';

export type FeedbackPostUseCase = {
  create: Create;
}

export const buildFeedbackPostUseCase = (params: UseCaseParams): FeedbackPostUseCase => {
  const create = buildCreate(params);

  return {
    create
  }
}
