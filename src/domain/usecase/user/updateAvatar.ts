import { UseCaseParams } from '@/domain/usecase/types';
import { IUser } from '@/domain/entity/user';
import { NotFoundError } from '@/domain/errors';
import { saveFile } from '@/lib/file/uploadFile';

export type UpdateAvatar = (params: {
  id: string;
  file:  Express.Multer.File;
}) => Promise<IUser | never>;

export const buildUpdateAvatar = ({ adapter }: UseCaseParams): UpdateAvatar => {
  return async ({ id, file }) => {
    const user_exists = await adapter.userRepository.get({
      where: {
        id,
      },
    });

    if (!user_exists) {
      throw new NotFoundError({
        code: 'USER_NOT_FOUND',
      });
    }

    const savedFile= saveFile(file)

    const user = await adapter.userRepository.update({
      where: {
        id,
      },
      data: {
        avatar: savedFile.name
      },
    });

    return user;
  };
};
