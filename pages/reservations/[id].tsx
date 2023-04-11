import AdminNavbar from '@/components/admin-navbar';
import AdminFooter from '@/components/admin/footer';
import Header from '@/components/head';
import {
  ReservationProps,
  ReservationService,
} from '@/services/ReservationService';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const reservationService = new ReservationService();

export const clientColumns = [
  {
    field: 'name',
    headerName: 'Order Name',
    width: 150,
  },
  {
    field: 'total',
    headerName: 'Order Total',
    width: 150,
    valueGetter: (params) => `$${params?.row.total / 100}`,
  },
  {
    field: 'created_at',
    headerName: 'Date Created',
    width: 250,
    valueGetter: (params) =>
      moment(params.row?.created_at).format('MMMM Do, YYYY'),
  },
];

export default function Reservation() {
  const [order, setReservation] = useState<ReservationProps>(null);

  const router = useRouter();

  const id = router.query.id as string;

  useEffect(() => {
    const loadRoute = async () => {
      const response = await reservationService.fetchReservationById(id);
      setReservation(response.body.reservation);
    };
    router.isReady && loadRoute();
  }, [router.isReady, id]);

  return (
    order && (
      <main className="layout_container">
        <Header title="OnlyTable | Orders" />
        <AdminNavbar />

        <div className="orders" style={{ backgroundColor: '#cc0000' }}>
          <button
            onClick={() => router.push('/reservations/list')}
            className="order_back"
          >
            Back
          </button>
          <h1>Reservation Id: {id}</h1>
          <p>Order Name: {order.name}</p>
          <p>Number of guests: {order.number_of_guests}</p>
          <p>
            Reservation Date:{' '}
            {moment(order.date).format('MMMM Do, YYYY, h:mm a')}{' '}
          </p>
        </div>

        <AdminFooter />
      </main>
    )
  );
}
