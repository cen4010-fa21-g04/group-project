import Footer from '@/components/footer';
import Header from '@/components/head';
import { firebaseApp } from '@/firebase/firebaseApp';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(firebaseApp);

const login = () => {
  signInWithEmailAndPassword(auth, 'test@test.com', 'password');
};
const logout = () => {
  signOut(auth);
};

export default function Login() {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

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
              type="text"
              placeholder="Password"
            />
            <br></br>
            <button className="lbutton" type="submit">
              Log In
            </button>
          </span>
        </form>
      </div>
      <Footer href="main" title="Customer View" />
    </main>
  );
}

const CurrentUser = () => {
  return <button onClick={login}>Log in</button>;
};
