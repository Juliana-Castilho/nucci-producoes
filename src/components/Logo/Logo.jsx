import React from 'react';
import Link from 'next/link';
import style from './Logo.module.css';

export default function Logo() {
  return (
    <>
      <div className={style.logo}>
        <Link href="/">
          <a>
            <img
              src="/logo1.png"
              className={style.rotativa}
              alt="Nucci Produções"
              width={150}
              height={150}
            />
            <img
              src="/logo2.png"
              className={style.fixa}
              alt="Nucci Produções"
              width={150}
              height={150}
            />
          </a>
        </Link>
      </div>
    </>
  );
}
