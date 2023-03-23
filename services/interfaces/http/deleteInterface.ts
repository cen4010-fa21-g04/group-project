import { HttpResponse } from './httpResponse';

export interface DeleteInterface {
  DELETE(
    payload: DeleteInterfaceNamespace.Request
  ): Promise<DeleteInterfaceNamespace.Response>;
}

export namespace DeleteInterfaceNamespace {
  export type Request = { path: string; csrfToken?: string };
  export type Response = HttpResponse;
}
