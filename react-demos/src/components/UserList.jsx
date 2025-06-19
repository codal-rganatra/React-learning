import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'jdoe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jsmith@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'ajohnson@example.com   ' }
    ]
  return (
    <div>
        {users.map(({id,name,email}) => (
            <div key={id}>
                <h2>Name:{name}</h2>
                <p>ID:{id}</p>
                <p>Email: {email}</p>
            </div>
        ))}
    </div>
  )
}

export default UserList