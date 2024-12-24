import { UseCaseParams } from '../types';
import { buildUpdateAvatar, UpdateAvatar } from './updateAvatar';

export type UserUseCase = {
  updateAvatar: UpdateAvatar;
};

export const buildUserUseCase = (params: UseCaseParams): UserUseCase => {
  const updateAvatar = buildUpdateAvatar(params);
  return {
    updateAvatar,
  };
};
