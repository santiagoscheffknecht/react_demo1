import React from 'react'
import './listPart.css'

export default function listPart(hero) {
    return (
        <div className="listPart">
            <h1>{hero.name}</h1>
        </div>
    )
}
