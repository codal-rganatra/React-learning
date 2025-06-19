import React from 'react'

const ProfileCard = () => {
    const cardStyle = { background: 'lightgray', padding: 15, borderRadius: 8, color: 'black' };
  return (
    <div style={cardStyle}>
        <h1>
            Profile Card
        </h1>
        <p>
            This is a sample profile card component. It can be used to display user information in a styled format.
        </p>
    </div>
  )
}

export default ProfileCard