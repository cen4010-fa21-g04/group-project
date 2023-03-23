import { BaseService } from './BaseService';

type Customer = {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  email?: string;
  phone?: string;
};

export class CustomerService extends BaseService {
  public async fetchAllCustomers() {
    return await this.GET({ path: '/customers' });
  }

  public async createCustomer(body: Customer) {
    return await this.POST({
      path: '/customers',
      body,
    });
  }

  public async fetchCustomerById(id: string) {
    return await this.GET({
      path: `/customers/${id}`,
    });
  }

  public async updateCustomer(id: string, body: Customer) {
    return await this.PUT({
      path: `/customers/${id}`,
      body,
    });
  }

  public async deleteUser(id: string) {
    return await this.DELETE({
      path: `/customers/${id}`,
    });
  }
}
