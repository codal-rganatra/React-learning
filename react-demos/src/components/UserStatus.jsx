import React from 'react'

const UserStatus = ({isLoggedIn,isAdmin}) => {
  return (
    <div>
      <h2>UserStatus</h2>
      {isLoggedIn ? (
        <div>
          <h3>Welcome back, User!</h3>
          {isAdmin ? (<p>You have admin privileges.</p>):(<p>You are a regular user.</p>)}
        </div>
      ) : (
        <div>
          <h3>Please log in to continue.</h3>
        </div>
      )}
      
    </div>
  )
}

export default UserStatus