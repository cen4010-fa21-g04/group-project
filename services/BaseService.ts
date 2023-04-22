import { DeleteInterfaceNamespace } from './interfaces/http/deleteInterface';
import {
  GetInterface,
  GetInterfaceNamespace,
} from './interfaces/http/getInterface';
import {
  PostInterface,
  PostInterfaceNamespace,
} from './interfaces/http/postInterface';
import {
  PutInterface,
  PutInterfaceNamespace,
} from './interfaces/http/putInterface';

export class BaseService implements GetInterface, PostInterface, PutInterface {
  static url: string = `/api`;

  public async GET(
    payload: GetInterfaceNamespace.Request
  ): Promise<GetInterfaceNamespace.Response> {
    const { path } = payload!;
    const res = await fetch(`${BaseService.url + path}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
    });
    return await res.json();
  }

  public async POST(
    payload: PostInterfaceNamespace.Request
  ): Promise<PostInterfaceNamespace.Response> {
    const { path, body } = payload!;
    const res = await fetch(`${BaseService.url + path}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  public async PUT(
    payload: PutInterfaceNamespace.Request
  ): Promise<PutInterfaceNamespace.Response> {
    const { path, body } = payload!;
    const res = await fetch(`${BaseService.url + path}`, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (res.status === 304) return { notModified: true, statusCode: 304 };
    return await res.json();
  }

  public async DELETE(
    payload: DeleteInterfaceNamespace.Request
  ): Promise<DeleteInterfaceNamespace.Response> {
    const { path } = payload!;
    const res = await fetch(`${BaseService.url + path}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'same-origin',
    });
    return await res.json();
  }
}
