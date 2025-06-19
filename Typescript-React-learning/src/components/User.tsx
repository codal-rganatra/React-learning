import React from 'react'

//Method1: const User = (props: {name:string, age: number, isStudent: boolean})
//Method2: const User = ({name, age, isStudent}: {name:string, age: number, isStudent: boolean})
//Method3: using custom type: const User = ({name, age, isStudent}: userinfo) => {
//Method4: using interface as used here

// type userinfo = {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }

interface userinfo {
    name: string
    age: number
    isStudent: boolean
}

const User = ({name, age, isStudent}: userinfo) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Student: {isStudent? "yes": "no"}</h2>
    </div>
  )
}

export default User