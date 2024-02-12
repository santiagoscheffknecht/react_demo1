import React from 'react';
import './PCard.css';

export default function PCard(info) {
    return (
        <div className="PCard">
            <div className="Picture">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" />
            </div>
            <div className="Notes">
                <h1>{info.name}</h1>
                <h2>{info.info1}</h2>
            </div>
        </div>
    );
}
