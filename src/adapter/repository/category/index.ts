import { AdapterParams } from '@/adapter/types';
import { buildGet, Get } from './get';
import { buildList, List } from './list';

type Params = Pick<AdapterParams, 'db'>

export type CategoryRepository = {
  get:Get,
  list:List
}
export const buildCategoryRepository = (params: Params): CategoryRepository=>{
  const get = buildGet(params)
  const list = buildList(params)

  return {
    get,
    list
  }
}