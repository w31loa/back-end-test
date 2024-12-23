import { Request, Response } from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'feedbackPost'>;
export type Get = (req: Request, res: Response) => Promise<Response>;
export const buildGet = ({ feedbackPost }: Params): Get => {
  return async (req, res) => {
    const data = await feedbackPost.get({
      id: req.params.id,
    });

    return res.status(200).json(data);
  };
};
