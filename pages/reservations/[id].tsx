import AdminNavbar from '@/components/admin-navbar';
import AdminFooter from '@/components/admin/footer';
import Header from '@/components/head';
import AdminRoute from '@/hocs/adminRoute';
import {
  ReservationProps,
  ReservationService,
} from '@/services/ReservationService';
import { Button } from '@mui/material';
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

function Reservation() {
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

  const handleDeleteReservation = async () => {
    const response = await reservationService.deleteReservation(id);
    console.log(response);
    setReservation(null);
    router.push('/reservations/list');
  };

  return (
    order && (
      <main className="layout_container" style={{ color: '#fff' }}>
        <Header title="OnlyTable | Orders" />
        <AdminNavbar />

        <div className="orders" style={{ backgroundColor: '#cc0000' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push('/reservations/list')}
            sx={{ mr: 2 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteReservation}
          >
            Delete Reservation
          </Button>
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

export default AdminRoute(Reservation);
