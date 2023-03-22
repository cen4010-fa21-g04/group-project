import Footer from '@/components/footer';
import Header from '@/components/head';
import Link from 'next/link';

export default function Login() {
  return (
    <main className="layout_container">
      <Header title="Login" />
      <div className="login">
        <form className="login_form">
          <h1>Log In - Employee View</h1>
          <span>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button type="submit">Log In</button>
          </span>
          <Link href="reservations">Quick Link Until Login Form is Setup</Link>
        </form>
      </div>
      <Footer href="main" title="Customer View" />
    </main>
  );
}
