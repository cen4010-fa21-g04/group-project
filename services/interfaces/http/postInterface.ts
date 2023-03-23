import { HttpResponse } from './httpResponse';

export interface PostInterface {
  POST(
    payload: PostInterfaceNamespace.Request
  ): Promise<PostInterfaceNamespace.Response>;
}

export namespace PostInterfaceNamespace {
  export type Request = { path: string; body: object; csrfToken?: string };
  export type Response = HttpResponse;
}
