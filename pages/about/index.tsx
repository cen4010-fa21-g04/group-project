import { memberIds } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  return (
    <div className="about">
      <h1 className=" font-bold tracking-tight text-gray-900 sm:text-2xl">
        Our Team
      </h1>
      <div className="about-grid">
        {memberIds.map((id) => (
          <div
            className="about-card"
            onClick={() => router.push(`/about/${id}`)}
            key={id}
          >
            <img alt={`${id} picture`} />
            <h6>{id}</h6>
            <p>Developer</p>
            <Link href={`/about/${id}`}>Learn more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
