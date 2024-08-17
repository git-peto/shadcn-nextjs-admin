"use client";

import useIsCollapsed from "@/hooks/use-is-collapsed";
import { Fragment, ReactNode } from "react";
import Sidebar from "./sidebar";
import { usePathname } from 'next/navigation';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed();
  const pathname = usePathname();

  if (pathname.split('/')[1] !== 'admin') {
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }

  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id='content'
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
      >
        {children}
      </main>
    </div>
  );
};