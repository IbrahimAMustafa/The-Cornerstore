'use client'; // Required for hooks in the App Router

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }]

  return (
    <>
        <footer className='relative bg-(--dark) h-75'>
            <div className='flex flex-row'>
                <div className=''>
                    <p>
                        test
                    </p>
                </div>
            </div>
            <p className='absolute bottom-0 left-50 text-(--light) text-center'>
                © 2026 The Corner Store. All rights reserved. | Sitemap
            </p>
        </footer>
    </>
  );
}