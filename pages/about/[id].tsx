import { memberComponents, memberIds } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AboutId() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const router = useRouter();

  //deconstruct id from router query
  const id = router.query.id as string;

  //on page load
  useEffect(() => {
    //ensure router is loaded
    if (!router.isReady) return;
    //if router query doesn't match one of the member ids
    //redirect to the about page
    if (!memberIds.includes(id)) router.push('/about');
    //load route
    setLoaded(true);

    //dependency array, re-fetch on router.isReady
  }, [router.isReady]);

  //returned html
  return loaded ? (
    <div>
      <Link href="/about">Back</Link>
      {memberComponents[id]}
    </div>
  ) : null;
}
