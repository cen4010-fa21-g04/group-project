import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function AdminNavbar() {
  return (
    <nav className="navbar">
      <NavbarLink href="reservations/list">Reservations Made</NavbarLink>
      <NavbarLink href="menu/update">Update Menu</NavbarLink>
      <NavbarLink href="orders">Orders placed</NavbarLink>
    </nav>
  );
}

function NavbarLink({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter();
  return (
    <Link
      href={`/${href}`}
      className={`navbar_link ${
        router.pathname == `/${href}` && 'navbar_active'
      }`}
    >
      {children}
    </Link>
  );
}
