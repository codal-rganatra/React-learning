import React, { useState } from 'react'

type Userprofiletype = {
    name: string;
    age: number;
    pref: string;
}
const UserProfile = () => {

    const [obj, setobj]=useState<Userprofiletype>({name:"RK", age:22, pref:"Books"})
  return (
    <div>
        Value is:{JSON.stringify(obj)}
        <button onClick={()=> setobj({name:"Raj", age:22, pref:"Books, Playing"})}>Change data</button>
    </div>
  )
}

export default UserProfile