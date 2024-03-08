import React from 'react';
import style from './startsite.module.css';
import bottomImage from './13Oesterreichhintergrund.png';
export default function StarSite() {
  return (
    <div>
      <div className={style.top}>
        <h1 className={style.letter}>Austrian Bundesliga</h1>
      </div>
      <div className={style.cage}>hallo</div>
      <div className={style.bottom}>
        <img src={bottomImage} className={style.image} alt="Bottom Image" />
      </div>
    </div>
  );
}