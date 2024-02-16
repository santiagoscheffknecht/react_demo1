import React from 'react'
import PCard from './PCard'

export default function PCardContainer() {
    return (
        <div>
            <PCard picture={<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" />} name='Christoffer' info1='Klaus' />
        </div>
    )
}
