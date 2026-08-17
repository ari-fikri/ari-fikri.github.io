'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const urlParams = new URLSearchParams(searchParams.toString());
      const utmSource = urlParams.get('utm_source');
      const referrer = document.referrer;

      // Log page view
      window.gtag('event', 'page_view', {
        page_path: pathname,
        utm_source: utmSource,
        referrer: referrer
      });
    }
  }, [pathname, searchParams]);

  return null;
}
