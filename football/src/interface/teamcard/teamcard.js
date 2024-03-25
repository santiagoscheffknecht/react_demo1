import React from 'react';
import style from './teamcard.module.css';

export default function TeamCard(info) {
    const handleClick = () => {
        const { id, imageUri } = info;
        const url = `team.html?id=${id}`;
        window.location.href = url;
    };

    return (
        <div>
            <div className={style.card}>
                <img className={style.Picture} src={info.imageUri} alt='Picture' onClick={handleClick} />
            </div>
        </div>
    );
}
