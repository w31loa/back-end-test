import {Request, Response} from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'feedbackPost'>;

export type Delete = (req: Request, res: Response) => Promise<Response>;
export const buildDelete = ({ feedbackPost }: Params): Delete => {
  return async (req, res) => {
    const data = await feedbackPost.deletePost({
      id: req.params.id,
      user_id: req.user!.id
    });

    return res.status(200).json(data);
  };
};
