import { Request, Response } from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'upvote'>;

export type Downvote = (req: Request, res: Response) => Promise<Response>;
export const buildDownvote = ({ upvote }: Params): Downvote => {
  return async (req, res) => {
    const data = await upvote.downvote({
      user_id: req.user!.id,
      feedbackPost_id: req.body.feedbackPost_id,
    });

    return res.status(201).json(data);
  };
};
