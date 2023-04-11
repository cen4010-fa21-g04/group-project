import { BaseService } from './BaseService';
import { HttpResponse } from './interfaces/http/httpResponse';

export interface ReservationProps {
  id?: string;
  name?: string;
  number_of_guests?: number;
  date: Date;
}

export class ReservationService extends BaseService {
  public async fetchAllReservations(): Promise<
    HttpResponse<{ reservations: ReservationProps[] }>
  > {
    return await this.GET({ path: '/reservations' });
  }

  public async createReservation(
    body: ReservationProps
  ): Promise<HttpResponse<{ reservation: ReservationProps }>> {
    return await this.POST({
      path: '/reservations',
      body,
    });
  }

  public async fetchReservationById(
    id: string
  ): Promise<HttpResponse<{ reservation: ReservationProps }>> {
    return await this.GET({
      path: `/reservations/${id}`,
    });
  }

  public async deleteReservation(id: string) {
    return await this.DELETE({
      path: `/reservations/${id}`,
    });
  }
}
