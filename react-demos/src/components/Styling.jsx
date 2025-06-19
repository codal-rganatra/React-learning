import { FaCartArrowDown } from "react-icons/fa";
import React from 'react'

const Styling = () => {
    const headingStyle = {
        color: "red",
        backgroundColor: "yellow",
        padding: 20,
        textAlign: "center"
    };
  return (
    <div>
        {/* <h1 style ={{color: "ivory", backgroundColor: "blue", padding:25}} >Inline Style</h1>
        <h1 style={headingStyle}>Another method of styling</h1> */}
        <h1>External method of styling</h1>
        <FaCartArrowDown />
    </div>
  )
}

export default Styling