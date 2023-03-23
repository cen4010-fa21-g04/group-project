import { HttpResponse } from './httpResponse';

export interface PutInterface {
  PUT(
    payload: PutInterfaceNamespace.Request
  ): Promise<PutInterfaceNamespace.Response>;
}

export namespace PutInterfaceNamespace {
  export type Request = { path: string; body: object; csrfToken?: string };
  export type Response = HttpResponse;
}
