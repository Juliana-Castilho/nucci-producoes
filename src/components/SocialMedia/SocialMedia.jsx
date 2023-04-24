import React from 'react';
import Image from 'next/image';
import style from '../../styles/ComponentStyles/SocialMedia.module.css';

export default function SocialMedia() {
  return (
    <ul className="flex">
      <li className={style.socialItem}>
        <a
          href="https://www.instagram.com/nucci_producoes/"
          target="_black"
          className={style.sosialIcon}
        >
          <Image
            src="/instagram-icon.svg"
            width={30}
            height={30}
            alt="Instagram"
          />
        </a>
      </li>
      <li className={style.socialItem}>
        <a
          href="https://www.facebook.com/nuccipedro/"
          target="_black"
          className={style.sosialIcon}
        >
          <Image
            src="/facebook-icon.svg"
            width={30}
            height={30}
            alt="Facebook"
          />
        </a>
      </li>
      <li className={style.socialItem}>
        <a
          href="https://www.youtube.com/channel/UCX21yX_vbUBK2NyG29FqXPQ"
          target="_black"
          className={style.sosialIcon}
        >
          <Image src="/youtube-icon.svg" width={30} height={30} alt="YouTube" />
        </a>
      </li>
    </ul>
  );
}
