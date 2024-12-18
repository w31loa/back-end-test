import { Adapter } from '../types'
import { AuthService, buildAuthService } from './auth';

export type Service = {
  auth: AuthService;
}

export const buildService = (params: Adapter): Service => {
  const auth = buildAuthService(params); 
  
  return {
    auth,
  }
}
  
