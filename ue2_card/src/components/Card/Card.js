import React from 'react'
import styles from './PCard.module.css'
export default function Card(info) {
    return (
        <div className={styles.PCard}>
            <div className='bg'>
                <h1>{info.name}</h1>
                <h2>{info.title}</h2>
            </div>

            <div>
                <img src={info.imageUri} alt='' />
            </div>
        </div>
    )
}
