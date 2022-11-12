import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Button(props) {
    return (
        <div>
           
            <button className={props.className} onClick={props.handleBtn}><img src={props.img} /> {props.name}</button>
        </div>
    )
}