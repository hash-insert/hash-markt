import React,{useState, useEffect} from 'react';

import Card from '../Card/Card';
const Home = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const fetchDatat = () => {
      fetch("https://fakestoreapi.com/products")
      .then((res) =>res.json())
      .then((data) => { setData(data);})
    }
  
    useEffect(() => {
      fetchDatat();
    },[]);

    return (
        <>
        <div>
            <h1>home</h1>
        </div>
        <div className="filterbtn">
            <button onClick={()=> setFilter(data)}> All</button>
            <button onClick={()=> setFilter(data)}> Electronics</button>
            <button onClick={()=> setFilter(data)}>Jewellary</button>
            <button onClick={()=> setFilter(data)}> mens Clothing</button>
            <button onClick={()=> setFilter(data)}> Womens Clothing</button>
        </div>
        <ul className='cardContainer'>
        {
        filterUsers.map((item,index) =>(
        <li key={item.id}>
          {/* {item.name}<br></br>({item.company.name}) */}
          <Card 
             
          />

          </li>
          ))
          }
      </ul>
        
        
        </>
    )
}

export default Home