import React from 'react'
import '.PCar.module.css'
export default function Card(info) {
    return (
        <div>
            <div>
                <h1>{info.name}</h1>
                <h2>{info.title}</h2>
            </div>

            <div>
                <img scr={info.imageUri} alt='' />
            </div>
        </div>
    )
}
