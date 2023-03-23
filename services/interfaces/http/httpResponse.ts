export type HttpResponse<T = any> = {
  statusCode: number;
  body?: T;
  message?: string;
  error?: string;
  notModified?: boolean;
  type?: string;
};
