import React, { useReducer, useState } from 'react'
import { counterReducer,initialState } from './counterReducer';

const CounterwithReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [payloadamt, setpayload] = useState(0);
  return (
    <div>
        Count: {state.count}

        <br />
        <input type="number" placeholder="Increment by Amount" onChange={(e) => {setpayload(e.target.value)}}/>
        <button onClick={() => dispatch({ type: 'incrementbyAmount', payload: parseInt(payloadamt) })}>Increment by {payloadamt}</button>
        <button onClick={() => dispatch({ type: 'decrementbyAmount', payload: parseInt(payloadamt) })}>Decrement by {payloadamt}</button>

        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default CounterwithReducer