'use client';

import React from 'react';
import styles from '../styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { GrMenu } from 'react-icons/gr';

export default function Navbar() {
  return (
    <nav id={styles.nav}>
      <div className={styles.item__wrapper}>
        <div className={styles.image__wrapper}>
          <Link href="/">
            <Image
              className="svg"
              src="/assets/brand_assets/svg/logo-no-background.svg"
              width={105}
              height={65}
              priority
            />
          </Link>
        </div>
        <ul className={`ul__li--none flex flex__align ${styles.nav__links}`}>
          <li className="clickable">HOME</li>
          <li className="clickable">ABOUT US</li>
          <li className="clickable">PRE-ORDER</li>
        </ul>
        <div className={styles.hamburger}>
          <div className="clickable">
            <GrMenu size={32} />
          </div>
        </div>
      </div>
    </nav>
  );
}
