import Link from 'next/link';

export default function Footer({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <footer className="layout_footer">
      <Link href={href}>{title}</Link>
    </footer>
  );
}
