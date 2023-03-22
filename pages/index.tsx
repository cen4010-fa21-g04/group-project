import Footer from '@/components/footer';
import Header from '@/components/head';
import Link from 'next/link';

export default function Home() {
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
