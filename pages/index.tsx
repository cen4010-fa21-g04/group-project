import Footer from '@/components/footer';
import Header from '@/components/head';
import { CustomerService } from '@/services/CustomerService';
import Link from 'next/link';
import { useEffect } from 'react';

const customerService = new CustomerService();

export default function Home() {
  useEffect(() => {
    loadRoute();
  }, []);

  const loadRoute = async () => {
    const response = await customerService.fetchAllCustomers();

    console.log(response);
  };

  const createCustomer = async () => {
    const customerPayload = {
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '333-332-1123',
      email: 'jdoe@gmail.com',
      address: 'jdoe street @5400 lane',
    };

    const response = await customerService.createCustomer(customerPayload);

    console.log(response);
  };

  return (
    <main className="layout_container">
      <Header title="OnlyTable | Welcome" />
      <div className="home">
        <h1 className="home_header">Welcome to OnlyTable!</h1>
        <Link className="home_cta" href="reservations">
          Make a Reservation
        </Link>
        <Link href="menu" className="home_cta">
          Place an Order
        </Link>
      </div>
      <Footer title="Employee / Restaurant View" href="login" />
    </main>
  );
}
