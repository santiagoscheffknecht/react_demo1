import React from 'react'
import './PCard.css'
export default function PCard(person, info) {
    return (
        <div class="PCard">
            <div class="Picture"></div>
            <div class="Notes">
                <h1>{person.name}</h1>
                <h2>{info.info1}</h2>
            </div>
        </div>
    )
}
