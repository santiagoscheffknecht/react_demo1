import React from 'react'
import './button.css'
export default function button(props) {
    const clicker = () => {
        alert('you clicked me');
    }
    return (
        <div class="button" onClick={clicker}>
            <h1>{props.name}</h1>
        </div>
    )

}
