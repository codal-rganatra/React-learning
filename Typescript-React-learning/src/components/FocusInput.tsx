import React, { useRef, type FormEvent } from 'react'

const FocusInput = () => {
    const focusinp = useRef<HTMLInputElement>(null);
    function focus(event:FormEvent){
        event.preventDefault();
        focusinp.current!.focus();
    }
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter data here' ref={focusinp}/>
            <button onClick={focus} type='submit'>Focus Input</button>
        </form>
    </div>
  )
}

export default FocusInput