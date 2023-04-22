import { firebaseApp } from '@/firebase/firebaseApp';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/dist/client/router';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(firebaseApp);

function AdminRoute(WrappedComponent) {
  return function Wrapper(...props) {
    const router = useRouter();

    const [user, loading, error] = useAuthState(auth);

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

    if (!user) {
      router.push('/login');
      return;
    }

    return <WrappedComponent {...props} />;
  };
}

export default AdminRoute;
