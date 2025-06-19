import React from 'react'
import { useState } from 'react'

const PropsExample = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Count: {count}</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default PropsExample