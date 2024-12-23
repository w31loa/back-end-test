import { AdapterParams } from '@/adapter/types';
import { buildGet, Get } from './get';
import { buildList, List } from './list';

type Params = Pick<AdapterParams, 'db'>

export type StatusRepository = {
  get:Get,
  list:List
}
export const buildStatusRepository = (params: Params): StatusRepository=>{
  const get = buildGet(params)
  const list = buildList(params)

  return {
    get,
    list
  }
}