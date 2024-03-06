import React, { useEffect, useState } from 'react'
import Card from './Card/Card.js'

export default function PContainer() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch("https://65e1dc63a8583365b3177bf4.mockapi.io/People").then(
            (res) =>
                res.json().then((data) => {
                    console.log(data);
                    setPeople(data)
                })
        );
    }, []);
    return (
        <div>
            <h1>
                People
            </h1>
            <div className='flex'>
                {people.map(people => {
                    return <Card name={people.name} imageUri={people.avatar} titel={people.pet}></Card>
                })}
            </div>
        </div>
    )
}
