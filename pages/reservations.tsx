import Footer from '@/components/footer';
import Header from '@/components/head';
import Navbar from '@/components/navbar';

export default function Reservations() {
  return (
    <main className="layout_container">
      <Header title="OnlyTable | Reservations" />
      <Navbar />

      <div className="reservations">
        <form className="reservations_form">
          <input type="text" placeholder="Input date" />
          <input type="text" placeholder="Number of people" />
          <button type="submit">Submit</button>
        </form>
        <div className="reservations_list" />
        <form className="reservations_form">
          <input type="text" placeholder="Input date" />
          <input type="text" placeholder="Number of people" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer href="login" title="Employee / Restaurant View" />
    </main>
  );
}
