import {Request, Response} from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'feedbackPost'>

export type Create = (req: Request, res: Response)=>Promise<Response>
export const buildCreate = ({feedbackPost}: Params): Create=>{
  return async (req, res)=>{
    const data = await feedbackPost.create({
      title: req.body.title,
      description: req.body.description,
      category_id: req.body.category_id,
      status_id: req.body.status_id,
      user_id: req.user!.id
    });

    return res.status(201).json(data);
  }
}
