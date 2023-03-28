import { BaseService } from './BaseService';
import { HttpResponse } from './interfaces/http/httpResponse';

type MenuItemProps = {
  id?: string;
  name?: string;
  price?: number;
};

export class MenuService extends BaseService {
  public async fetchAllMenus(): Promise<
    HttpResponse<{ menu: MenuItemProps[] }>
  > {
    return await this.GET({ path: '/menu' });
  }

  public async createItem(
    body: MenuItemProps
  ): Promise<HttpResponse<{ item: MenuItemProps }>> {
    return await this.POST({
      path: '/menu',
      body,
    });
  }

  public async fetchMenuById(id: string) {
    return await this.GET({
      path: `/menu/${id}`,
    });
  }

  public async updateMenu(id: string, body: MenuItemProps) {
    return await this.PUT({
      path: `/menu/${id}`,
      body,
    });
  }

  public async deleteItem(id: string) {
    return await this.DELETE({
      path: `/menu/${id}`,
    });
  }
}
