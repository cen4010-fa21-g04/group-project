import AdminNavbar from '@/components/admin-navbar';
import AdminFooter from '@/components/admin/footer';
import Header from '@/components/head';
import { OrderProps, OrderService } from '@/services/OrderService';
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

export default function Order() {
  const [order, setOrder] = useState<OrderProps>(null);

  const router = useRouter();

  const id = router.query.id as string;

  const loadRoute = async () => {
    const response = await orderService.fetchOrderById(id);
    setOrder(response.body.order);
  };

  useEffect(() => {
    router.isReady && loadRoute();
  }, [router.isReady]);

  return (
    order && (
      <main className="layout_container">
        <Header title="OnlyTable | Orders" />
        <AdminNavbar />

        <div className="orders" style={{ backgroundColor: '#cc0000' }}>
          <button onClick={() => router.push('/orders')} className="order_back">
            Back
          </button>
          <h1>Order Id: {id}</h1>
          <p>Order Name: {order.name}</p>
          <p>Order Total: ${order.total / 100}</p>
          <p>Order Items: </p>
          {order.items.map((orderItem) => (
            <p key={orderItem.item.id}>
              {orderItem.item.name} : {orderItem.item.quantity}
            </p>
          ))}
        </div>

        <AdminFooter />
      </main>
    )
  );
}
