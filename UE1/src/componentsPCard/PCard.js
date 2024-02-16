import React from 'react';
import './PCard.css';

export default function PCard(info) {
    return (
        <div className="PCard">
            <div className="Notes">
                <h3>{info.picture}</h3>
                <h1>{info.name}</h1>
                <h2>{info.info1}</h2>
            </div>
        </div>
    );
}
