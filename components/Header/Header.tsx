'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="TravelTrucks"
            width={136}
            height={15}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={`${styles.link} ${pathname.startsWith('/catalog') ? styles.active : ''}`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}