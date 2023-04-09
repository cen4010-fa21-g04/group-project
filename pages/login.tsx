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
            <input className = "lfirstform" type="text" placeholder="Username" />
            <br></br>
            <input className = "llastform" type="text" placeholder="Password" />
            <br></br>
            <button className = "lbutton" type="submit">Log In</button>
          </span>
          
        </form>
        
        <Link className = "outsidebutton" href="/reservations/list">
            Quick Link Until Login Form is Setup
          </Link>
      </div>
      <Footer href="main" title="Customer View" />
    </main>
  );
}
