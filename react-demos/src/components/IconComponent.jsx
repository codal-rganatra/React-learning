import { DiAndroid } from "react-icons/di";
import React from 'react'

const IconComponent = () => {
  return (
    <div style={{textAlign:'center', marginTop: '20px'}}>
        <h1>This is an icon</h1>
        <DiAndroid />
        <DiAndroid size={50}/>
        <DiAndroid size={30} color="gold"/>
    </div>
  )
}

export default IconComponent