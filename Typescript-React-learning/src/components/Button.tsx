import React from 'react'

const Button = ({label,onCLick, disabled}:{label: string,onCLick:() => number, disabled:boolean}) => {
  return (
    <div>
        <button onClick={onCLick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Button