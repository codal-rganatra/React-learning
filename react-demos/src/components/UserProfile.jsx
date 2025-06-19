import React, { createContext } from 'react'
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const UserProfile = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <div>
      {console.log(user)}
        <h1>My name is {user}</h1>
        <button onClick={() => setUser("John")}>Change Name to John</button>
    </div>
  )
}

export default UserProfile