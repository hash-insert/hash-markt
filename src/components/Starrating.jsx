import React from 'react'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import "./Starrating.css"
const colors = {
    yellow:"#000000",
    grey:"#A9A9A9"
}
const Starrating = () => {
    const stars = Array(5).fill(0)
    const [ratingvalue, setRatingvalue] = useState(0);
    const [hoverratingvalue, setHoverratingvalue] = useState(undefined);
    const handleClick = value =>{
        setRatingvalue(value)
    }
    const handleClickhover = value =>{
        setHoverratingvalue(value)
    }
  return (
    <div className='starcontainer'>
    <div className='stars'>
        {stars.map((_, index) =>{
            return(
                <FaStar
                key={index}
                size={24}
                style={{
                    marginRight: 10,
                    cursor:"pointer"
                }}
                
                color = {(hoverratingvalue || ratingvalue) > index ? colors.orange : colors.grey}
                onClick ={(value) => handleClick(index + 1)}
                onMouseOver={(value) => handleClickhover(index + 1)}
                />
            )
        })}
    </div>
</div>
  )
}

export default Starrating