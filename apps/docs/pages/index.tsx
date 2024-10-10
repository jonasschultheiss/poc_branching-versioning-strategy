import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  console.log('inside hook');

  useEffect(() => {
    const locale = router.locale ?? 'en';
    console.log('🚀 ~ useEffect ~ locale:', locale);
    router.replace(`/${locale}`);
  }, []);

  return null;
}
