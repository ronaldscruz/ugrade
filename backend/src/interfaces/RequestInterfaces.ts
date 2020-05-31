import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import User from './User';

export interface Request extends ExpressRequest {
  user?: User;
}

export interface Response extends ExpressResponse {}
