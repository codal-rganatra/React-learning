import React, { useState,useRef, useEffect } from 'react'


const Timer = () => {
    const [count, setCount] = useState(0);
    
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    },[]);
  return (
    <div>
        <h1>Timer: {count}</h1>
        <button onClick={() => {console.log("Stopping Timer"); clearInterval(intervalRef.current)}}>Stop Timer</button>
    </div>
  )
}

export default Timer