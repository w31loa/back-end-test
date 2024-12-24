import { Request, Response } from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'user'>;

export type UpdateAvatar = (req: Request, res: Response) => Promise<Response>;
export const buildUpdateAvatar = ({ user }: Params): UpdateAvatar => {
  return async (req, res) => {
    console.log(req.user?.id)
    const data = await user.updateAvatar({
      id: req.user!.id,
      file: req.file as Express.Multer.File,
    });
    return res.status(201).json(data);
  };
};
