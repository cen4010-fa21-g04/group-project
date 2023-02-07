import { memberIds } from '@/lib/data';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>Welcome to the about page</h1>
      <ul>
        {memberIds.map((id) => (
          <li key={id}>
            <Link href={`/about/${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
