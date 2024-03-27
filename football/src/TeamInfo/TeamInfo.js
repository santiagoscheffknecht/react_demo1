import React from 'react';
import style from './TeamInfo.module.css';

import bottomImage from './13Oesterreichhintergrund.png'; // Importiere das Bild

export default function StarSite() {
    return (
        <div style={{ backgroundImage: `url(${bottomImage})` }} className={style.backgroundImage}> {/* Setze das Hintergrundbild */}
            <div className={style.top}>
                <h1 className={style.letter}>Austrian Bundesliga</h1>
            </div>
        </div>
    );
}
