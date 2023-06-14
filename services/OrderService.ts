import { BaseService } from './BaseService';
import { HttpResponse } from './interfaces/http/httpResponse';

export interface OrderProps {
  id?: string;
  name?: string;
  total: number;
  card_cvv?: number;
  card_number?: string;
  card_exp?: string;
  created_at?: Date;
  items?: OrderItems[];
}

interface OrderItems {
  id?: Number;
  name?: string;
  quantity?: number;
  price?: number;
}

export class OrderService extends BaseService {
  public async fetchAllOrders(): Promise<
    HttpResponse<{ orders: OrderProps[] }>
  > {
    return await this.GET({ path: '/orders' });
  }

  public async createOrder(
    body: OrderProps
  ): Promise<HttpResponse<{ order: OrderProps }>> {
    return await this.POST({
      path: '/orders',
      body,
    });
  }

  public async fetchOrderById(
    id: string
  ): Promise<HttpResponse<{ order: OrderProps }>> {
    return await this.GET({
      path: `/orders/${id}`,
    });
  }

  public async deleteOrder(id: string) {
    return await this.DELETE({
      path: `/orders/${id}`,
    });
  }
}
