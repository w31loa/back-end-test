import { Response } from 'express';
import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';
import { SortByEnum } from '@/domain/usecase/feedbackPost/types';
import { parseQueryNumberParam } from '@/lib';

type Params = Pick<DeliveryParams, 'feedbackPost'>;
export type List = (req: AuthRequest, res: Response) => Promise<Response>;

export const buildList = ({ feedbackPost }: Params): List => {
  return async (req, res) => {
    const skip = parseQueryNumberParam(req.query.skip as string);
    const take = parseQueryNumberParam(req.query.skip as string);


    const posts = await feedbackPost.list({
      category_id: req.query.category_id as string,
      status_id: req.query.status_id as string,
      sortBy: req.query.sortBy as SortByEnum,
      skip,
      take,
    });

    return res.status(200).json(posts);
  };
};
