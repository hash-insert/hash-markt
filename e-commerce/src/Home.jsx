import React, {useState, useEffect} from 'react';

import Card from './Card';
export default function Home(){
 return(
    <div>
    <h1>Home</h1>
       <div className = "Home_page">
         <button onClick={() => setFilter(data)}> All</button>
         <button onClick={() => setFilter(data)}> Electronics</button>
         <button onClick={() => setFilter(data)}> Jewelery</button>
         <button onClick={() => setFilter(data)}> Men's Clothing</button>
         <button onClick={() => setFilter(data)}> Women's Clothing</button>
       </div>
           
    </div>
 )
}