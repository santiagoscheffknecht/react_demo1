import React, { useEffect, useState } from 'react';
import style from './startsite.module.css';
import Teamcard from './teamcard/teamcard';
import bottomImage from './13Oesterreichhintergrund.png';

export default function StarSite() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTeams(data);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <div className={style.top}>
        <h1 className={style.letter}>Austrian Bundesliga</h1>
      </div>
      <div className={style.cage}>
        {teams.map(team => (
          <Teamcard key={team.teamInfoId} name={team.teamName} imageUri={team.teamIconUrl} />
        ))}
      </div>
      <div className={style.bottom}>
        <img src={bottomImage} className={style.image} alt="Bottom Image" />
      </div>
    </div>
  );
}
