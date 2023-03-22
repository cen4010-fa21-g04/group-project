import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavbarLink href=" ">Home</NavbarLink>
      <NavbarLink href="reservations">Reservations</NavbarLink>
      <NavbarLink href="menu">Menu</NavbarLink>
      <NavbarLink href="cart">Cart</NavbarLink>
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
