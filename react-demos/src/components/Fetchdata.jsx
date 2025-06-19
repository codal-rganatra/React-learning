import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Fetchdata = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getdata(){
            await fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                return response.json();
            }).then((data)=>{
                setData(data);
            });
        }
        getdata();
    },[]);
  return (
    <div>
        <h1>Data:</h1>
        {data.length > 0 && (
            <ul>
                {data.map((item) => (
                    <li id={item.id}>{item.title}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Fetchdata