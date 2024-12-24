import {NextFunction, Response, Request} from 'express';
import { InvalidDataError } from '@/domain/errors';

export const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return next(
      new InvalidDataError({
        code: 'WRONG_FILE_INPUT',
        message: 'File is required and must be uploaded.',
      })
    );
  }
  next();
};
