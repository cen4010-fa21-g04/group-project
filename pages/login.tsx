import Footer from '@/components/footer';
import Header from '@/components/head';
import { firebaseApp } from '@/firebase/firebaseApp';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(firebaseApp);

export default function Login() {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    router.push('/reservations/list');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        router.push('/reservations/list');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="layout_container">
      <Header title="Login" />
      <div className="login">
        <form onSubmit={handleSubmit} className="login_form">
          <h1>Log In - Employee View</h1>
          <span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="lfirstform"
              type="text"
              placeholder="Username"
            />
            <br></br>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="llastform"
              type="password"
              placeholder="Password"
            />
            <br></br>
            <button className="lbutton" type="submit">
              Log In
            </button>
          </span>
        </form>
      </div>
      <Footer href="/" title="Customer View" />
    </main>
  );
}
