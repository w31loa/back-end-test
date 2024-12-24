import {NextFunction, Response, Request} from 'express';
import { InvalidDataError } from '@/domain/errors';

export const validateAvatarMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (req.file!.size>5 * 1024 * 1024) {
    return next(
      new InvalidDataError({
        code: 'WRONG_FILE_INPUT',
        message: 'File can`t be larger than 5mb.',
      })
    );
  }
  if (!allowedMimeTypes.includes(req.file!.mimetype)) {
    return next(
      new InvalidDataError({
        code: 'WRONG_FILE_INPUT',
        message: 'File must be image',
      })
    );
  }
  next();
};
