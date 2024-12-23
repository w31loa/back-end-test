import {Request, Response} from 'express';

import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'feedbackPost'>

export type Update = (req: Request, res: Response)=>Promise<Response>
export const buildUpdate = ({feedbackPost}: Params): Update=>{
  return async (req, res)=>{

    const data = await feedbackPost.update({
      id:req.params.id,
      title:req.body.title,
      description:req.body.description,
      category_id:req.body.category_id,
      status_id:req.body.status_id,
      user_id: req.user!.id
    })

    return res.status(200).json(data);
  }
}