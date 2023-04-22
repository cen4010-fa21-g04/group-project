import { firebaseApp } from '@/firebase/firebaseApp';
import { getAuth, signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const auth = getAuth(firebaseApp);

export default function AdminNavbar() {
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth);
    router.push('/');
  };
  return (
    <nav className="navbar">
      <NavbarLink href="reservations/list" active="reservations">
        Reservations Made
      </NavbarLink>
      <NavbarLink href="menu/update" active="menu">
        Update Menu
      </NavbarLink>
      <NavbarLink href="orders" active="orders">
        Orders placed
      </NavbarLink>
      <button className="navbar_link" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

function NavbarLink({
  href,
  children,
  active,
}: {
  href: string;
  children: ReactNode;
  active: string;
}) {
  const router = useRouter();
  return (
    <Link
      href={`/${href}`}
      className={`navbar_link ${
        router.pathname.includes(active) && 'navbar_active'
      }`}
    >
      {children}
    </Link>
  );
}
