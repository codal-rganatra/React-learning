import React from 'react'

const Card = (props) => {
  return (
    <div>{props.children}</div>

    // <div>HELLLLLL{props.children[0]}</div>
    // <div>HELLLLLL{props.children[2]}</div>
    // <div>{props.children}</div>
    // <div>HELLLLLL</div>
  )
}

export default Card