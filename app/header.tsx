'use client'; // Required for hooks in the App Router

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HeaderNav() {
  const pathname = usePathname();
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }]

  return (
    <nav className="flex sticky top-0 z-100 w-1/1 items-center h-(--navHeight) gap-4 pr-4 pl-4 pb-1 pt-1 bg-(--dark)">
        <h2 className='text-(length:--titleHeight) text-(--light)'>The Cornerstore</h2>

        <div className="flex ml-auto gap-4">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                <Link
                    key={link.href}
                    href={link.href}
                    className={(isActive ? 'text-(--highlight) font-bold' : 'text-(--light)') + " text-(length:--titleHeight)"}
                >
                    {link.label}
                </Link>
                );
            })}
        </div>
    </nav>
  );
}