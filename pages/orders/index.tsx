import AdminNavbar from '@/components/admin-navbar';
import AdminFooter from '@/components/admin/footer';
import Header from '@/components/head';
import AdminRoute from '@/hocs/adminRoute';
import { OrderProps, OrderService } from '@/services/OrderService';
import Box from '@mui/material/Box';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const orderService = new OrderService();

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

function Orders() {
  const [orders, setOrders] = useState<OrderProps[]>(null);

  const router = useRouter();

  const loadRoute = async () => {
    const response = await orderService.fetchAllOrders();
    setOrders(response.body.orders);
  };

  useEffect(() => {
    loadRoute();
  }, []);

  const handleEvent: GridEventListener<'rowClick'> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    router.push(`/orders/${params.row.id}`);
  };

  return (
    orders && (
      <main className="layout_container">
        <Header title="OnlyTable | Orders" />
        <AdminNavbar />

        <div className="orders">
          <h1>Orders</h1>
          <Box
            sx={{
              height: 'calc(100% - 2rem)',
              width: '100%',
              paddingLeft: '.5rem',
              boxSizing: 'border-box',
            }}
          >
            <DataGrid
              rows={orders}
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

export default AdminRoute(Orders);
