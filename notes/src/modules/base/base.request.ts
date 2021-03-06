import { Request } from 'express';

export default interface BaseRequest extends Request {
  value: string;
  xAccessToken: string;
  userId: string;
}
