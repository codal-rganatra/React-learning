import React from 'react'
import { useEffect } from 'react'
const BasicEffect = () => {
    useEffect(() => {
        console.log('Component mounted or updated');
    },[]);
  return (
    <div>
        <h1>Hiii</h1>
    </div>
  )
}

export default BasicEffect