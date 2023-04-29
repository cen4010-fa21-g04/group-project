import AdminNavbar from '@/components/admin-navbar';
import AdminFooter from '@/components/admin/footer';
import Header from '@/components/head';
import AdminRoute from '@/hocs/adminRoute';
import {
  ReservationProps,
  ReservationService,
} from '@/services/ReservationService';
import Box from '@mui/material/Box';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
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
    field: 'number_of_guests',
    headerName: 'Number of Guests',
    width: 150,
  },
  {
    field: 'date',
    headerName: 'Reservation Date',
    width: 250,
    valueGetter: (params) => {
      console.log(params.row.date);
      return moment(params.row?.date).format('MMMM Do, YYYY, h:mm a');
    },
  },
];

function Reservations() {
  const [reservations, setReservations] = useState<ReservationProps[]>(null);

  const router = useRouter();

  const loadRoute = async () => {
    const response = await reservationService.fetchAllReservations();
    console.log(response);
    setReservations(response.body.reservations);
  };

  useEffect(() => {
    loadRoute();
  }, []);

  const handleEvent: GridEventListener<'rowClick'> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    router.push(`/reservations/${params.row.id}`);
  };

  return (
    reservations && (
      <main className="layout_container">
        <Header title="OnlyTable | Reservations" />
        <AdminNavbar />

        <div className="orders">
          <h1>Reservations</h1>
          <Box
            sx={{
              height: 'calc(100% - 2rem)',
              width: '100%',
              paddingLeft: '.5rem',
              boxSizing: 'border-box',
            }}
          >
            <DataGrid
              rows={reservations}
              columns={clientColumns}
              sx={{ borderRadius: 0, border: 0 }}
              getRowId={(row) => row.id}
              onRowClick={handleEvent}
            />
          </Box>
        </div>

        <AdminFooter />
      </main>
    )
  );
}

export default AdminRoute(Reservations);
