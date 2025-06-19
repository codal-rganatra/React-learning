import React, { useReducer } from 'react'

const initialState = { count: 0 };

const reducer = (state, action) =>{
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

const Reducertry = () => {
    /*
        state = current state
        dispatch = a function to send actions to the reducer which then updates state
        reducer = function that describes how the state changes in response to actions
        initialState = the initial state of the component
    */
    const [state1, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        Count : {state1.count}
        <br />
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        
    </div>
  )
}

export default Reducertry