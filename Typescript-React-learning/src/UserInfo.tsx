import React from 'react'
import type { Info } from './types.ts'

const UserInfo = ({user}: {user:Info}) => {
  return (
    <div>
        <h2>Name: {user.name}</h2>
        <h2>ID: {user.id}</h2>
        <h2>Email: {user.email}</h2>
    </div>
  )
}

export default UserInfo