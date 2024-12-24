import { Request, Response } from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'category'>;
export type List = (req: Request, res: Response) => Promise<Response>;

export const buildList = ({ category }: Params): List => {
  return async (req, res) => {
    const categories = await category.list();

    return res.status(200).json(categories);
  };
};
