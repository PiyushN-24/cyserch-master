"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from "./components/navigation";
import Footer from "./components/footer/footer";

import { ReactNode } from 'react';

interface ClientLayoutProps {
    children: ReactNode;
  }
  
  const ClientLayout = ({ children }: ClientLayoutProps) => {
    const pathname = usePathname();
  
    return (
      <>
        
        <Navigation />
        {children}
        <Footer />
      </>
    );
  };
  
  export default ClientLayout;