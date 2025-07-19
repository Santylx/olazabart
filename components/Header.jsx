'use client';

import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={`site-header ${isHome ? '' : 'sticky-header'}`}>
      <div className="header-content">
        <Link href="/">
          <Image src={logo} alt="Logo" className="logo" width={50} height={50} />
        </Link>

        <div className="site-title">SANTIAGO RODRÍGUEZ OLAZÁBAL</div>
      </div>

      <nav className="nav-menu">
        <Link href="/about">ABOUT OLAZÁBAL</Link>
        <Link href="/articles">ARTICLES</Link>
        <Link href="/artwork">ARTWORK</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/shop">SHOP</Link>
        <Link href="/cart">
          <FiShoppingCart className="text-gray hover:text-green-300 text-xl" />
        </Link>
      </nav>
    </header>
  );
}
