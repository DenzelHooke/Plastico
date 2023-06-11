import React from 'react';
import styles from '../styles/navbar.module.scss';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav id={styles.nav}>
      <div className="flex flex__space">
        <div>
          <Image
            className="svg"
            src="/assets/brand_assets/svg/logo-no-background.svg"
            width={105}
            height={65}
            priority
          />
        </div>
        <ul className="ul__li--none flex flex__align">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>PRE-ORDER</li>
        </ul>
      </div>
    </nav>
  );
}
