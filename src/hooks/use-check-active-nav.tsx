"use client";

import { usePathname } from "next/navigation";

export default function useCheckActiveNav() {
  const pathname = usePathname();

  const checkActiveNav = (nav: string) => {
    if (nav === '/admin' && pathname === '/admin') {
      return true;
    } else if (nav !== '/admin' && pathname.startsWith(nav)) {
      return true;
    } else {
      return false;
    }
  };

  return { checkActiveNav };
}
