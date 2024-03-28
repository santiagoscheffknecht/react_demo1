import React, { useEffect, useState } from 'react';
import style from './TeamInfo.module.css';

import bottomImage from './13Oesterreichhintergrund.png';

export default function StarSite() {
    const [teamName, setTeamName] = useState("");
    const [teamInfo, setTeamInfo] = useState(null);

    useEffect(() => {

        const getTeamInfo = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            fetch(`https://api.openligadb.de/getbltable/%C3%B6bl1/2023`)
                .then(response => response.json())
                .then(data => {
                    const team = data.find(team => team.teamInfoId.toString() === id);
                    if (team) {
                        setTeamName(team.teamName);
                        setTeamInfo(team);
                    } else {
                        console.log("Team not found!");
                    }
                })
                .catch(error => console.error('Error fetching team data:', error));
        };

        getTeamInfo();
    }, []);

    const handleBack = () => {
        window.location.href = 'http://localhost:3000';
    };

    return (
        <div style={{ backgroundImage: `url(${bottomImage})` }} className={style.backgroundImage}>
            <div className={style.top}>
                <h1 className={style.letter}>{teamName}</h1>
                <button onClick={handleBack} className={style.backButton}>Zurück</button>
            </div>
            <div className={style.infobox}>
                {teamInfo && (
                    <div>
                        <p>{teamInfo.shortName}</p>
                        <p>Punkte: {teamInfo.points}</p>
                        <p>Tore: {teamInfo.goals}</p>
                        <p>Gegnerische Tore: {teamInfo.opponentGoals}</p>
                        <p>Matches: {teamInfo.matches}</p>
                        <p>Siege: {teamInfo.won}</p>
                        <p>Niederlagen: {teamInfo.lost}</p>
                        <p>Unentschieden: {teamInfo.draw}</p>
                        <p>Tordifferenz: {teamInfo.goalDiff}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
