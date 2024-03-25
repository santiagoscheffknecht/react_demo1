import React, { useEffect } from 'react';
import styles from './TeamInfo.module.css';


export default function TeamInfo() {
    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023")
            .then(res => res.json())
            .then(data => {
                let team = data.find(team => team.teamInfoId === id);
                console.log(team);
                if (team) {
                    document.getElementById("teamName").innerText = team.teamName;
                    document.getElementById("1").innerText = 'Punkte: ' + team.points;
                    document.getElementById("2").innerText = 'Siege: ' + team.won;
                    document.getElementById("3").innerText = 'Niederlage: ' + team.lost;
                    document.getElementById("4").innerText = 'Unentschieden: ' + team.draw;
                    document.getElementById("5").innerText = 'Tore: ' + team.goals;
                    document.getElementById("6").innerText = 'Matches: ' + team.matches;
                }
            });
    }, []);

    return (
        <div>
            <div id="teamName"></div>
            <div id="1"></div>
            <div id="2"></div>
            <div id="3"></div>
            <div id="4"></div>
            <div id="5"></div>
            <div id="6"></div>
        </div>
    );
}
