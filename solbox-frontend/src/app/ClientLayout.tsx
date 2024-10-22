'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from '../../component/Navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  //const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const user = localStorage.getItem('user'); 
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  const hideNavigationPaths = [ '/', '/start', '/login', '/signup', '/playing', '/userDetails', '/wallet'];


  return (
    <div className="flex flex-col min-h-screen px-4">
      <main className="flex-grow">{children}</main>
      <div className='items-center bottom-2 fixed w-11/12 animate-slideUp'>
      {isLoggedIn && !hideNavigationPaths.includes(pathname) && <Navigation />}
      </div>
    </div>
  );
}
