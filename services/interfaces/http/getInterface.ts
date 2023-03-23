import { HttpResponse } from './httpResponse';

export interface GetInterface {
  GET(
    payload: GetInterfaceNamespace.Request
  ): Promise<GetInterfaceNamespace.Response>;
}

export namespace GetInterfaceNamespace {
  export type Request = { path: string; csrfToken?: string };
  export type Response = HttpResponse;
}
