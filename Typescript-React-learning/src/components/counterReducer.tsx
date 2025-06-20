import React, { useReducer } from 'react'

type actiontype={act: "INCREMENT"} | {act: "DECREMENT"};
type Statetype = {count:number}

function customcall(state:Statetype,action:actiontype): State{
    switch (action.act) {
        case "INCREMENT":
            return{count: state.count+1};
        case "DECREMENT":
            return{count: state.count-1};
        default:
            return state;
    }
}

const counterReducer = () => {
    const [count, dispatch] = useReducer(customcall,{count:0})
  return (
    <div>
        
    </div>
  )
}

export default counterReducer