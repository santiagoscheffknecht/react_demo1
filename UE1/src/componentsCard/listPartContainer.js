import React from 'react'
import ListPart from './listPart'
import './listPart.css'
export default function listPartContainer() {
    return (
        <div className="Heros">
            <ListPart name='Superman' />
            <ListPart name='Batman' />
            <ListPart name='Spiderman' />
        </div>
    )
}
