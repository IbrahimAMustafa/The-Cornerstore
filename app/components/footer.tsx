'use client'; // Required for hooks in the App Router

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Inventory', href: '/Pages/inventory' },
    { label: 'About', href: '/Pages/about' },
    { label: 'Contact', href: '/Pages/contact' }]

  return (
    <>
        <footer className='mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full bg-(--dark)'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 w-full text-(--light)'>
                <div>
                    <h3 className='text-(--medium) font-bold text-xl'>The Cornerstore</h3>
                    <p className='text-sm text-accent-foreground/80 leading-relaxed'>
                        Come see Yama and Yaba's local convenience where you'll find anything you would want and need
                    </p>
                </div>
                <div className=''>
                    <h3 className='text-(--medium) font-bold text-xl'>Links</h3>
                    <div className='flex flex-col'>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-accent-foreground/80 leading-relaxed hover:text-(--highlight)"
                            >
                                {link.label}
                            </Link>
                            );
                        })}
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-(--medium) font-bold text-xl'>Contact Us</h3>
                    <address>
                        <a href="tel:2166313320" style={{textDecoration: "none", color: "inherit", fontStyle: "normal"}}>(216)-631-3320</a>
                        <p>3175 W 84th St <br/> Cleveland, OH 44102</p>
                    </address>
                </div>
            </div>
            <p className='text-(--light) text-center border-t border-accent-(--medium)/20 w-full'>
                © 2026 The Corner Store. All rights reserved. | Sitemap
            </p>
        </footer>
    </>
  );
}