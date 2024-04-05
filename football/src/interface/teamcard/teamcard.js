import React from 'react';
import style from './teamcard.module.css';

export default function TeamCard({ id, imageUri }) {
    const handleClick = async () => {
        const response = await fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023");
        const data = await response.json();
        const team = data.find(team => team.teamIconUrl === imageUri);

        if (team) {
            const url = `t?id=${team.teamInfoId}`;
            window.location.href = url;
        }
    };

    return (
        <div>
            <div className={style.card}>
                <img className={style.Picture} src={imageUri} alt='Picture' onClick={handleClick} />
            </div>
        </div>
    );
}
