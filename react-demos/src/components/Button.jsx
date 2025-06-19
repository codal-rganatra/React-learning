import React from 'react'
const handleClick = () => {
    console.log("Button clicked!", Math.round(Math.random() * 100));
}
const Button = () => {
  return (
    <div>
        <button onClick={handleClick}> Click Me</button>
    </div>
  )
}

export default Button