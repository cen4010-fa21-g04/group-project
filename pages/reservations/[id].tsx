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

function Reservation() {
  const [reservation, setReservation] = useState<ReservationProps>(null);

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
    reservation && (
      <main className="layout_container" style={{ color: '#fff' }}>
        <Header title="OnlyTable | reservations" />
        <AdminNavbar />

        <div className="reservations" style={{ backgroundColor: '#cc0000' }}>
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
          <p>reservation Name: {reservation.name}</p>
          <p>Number of guests: {reservation.numberOfGuests}</p>
          <p>
            Reservation Date:{' '}
            {moment(reservation.date).format('MMMM Do, YYYY, h:mm a')}{' '}
          </p>
        </div>

        <AdminFooter />
      </main>
    )
  );
}

export default AdminRoute(Reservation);
