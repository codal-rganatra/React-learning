import React, { useRef } from 'react'

const FocusInput = () => {
    const inputElement = useRef(null);
    function handleClick() {
        inputElement.current.value = "Focused RK!";
        inputElement.current.focus();
    }
  return (
    <div>
        <input type='text' placeholder='Focus me!' ref={inputElement} />
        <button onClick={() => {handleClick()}}>Focus Element</button>
    </div>
  )
}

export default FocusInput