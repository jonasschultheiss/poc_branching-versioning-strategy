import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const locale = router.locale ?? 'en';
    router.replace(`/${locale}`);
  }, []);

  return null;
}
