import { Request, Response } from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'status'>;
export type List = (req: Request, res: Response) => Promise<Response>;

export const buildList = ({ status }: Params): List => {
  return async (req, res) => {
    const statuses = await status.list();

    return res.status(200).json(statuses);
  };
};
