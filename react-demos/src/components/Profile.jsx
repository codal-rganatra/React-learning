import React, { use } from 'react'
import { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        age: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    }
    
  return (
    <div>
        <form>
            Name: <input type="text" name="name" placeholder='Add your name here' value = {profile.name} onChange={handleChange}/>
            Age: <input type="number" name="age" placeholder='Add your age here' value = {profile.age} onChange={handleChange}/>
        </form>

        <h3>Profile information</h3>
        <p>Name: {profile.name}</p> 
        <p>Age: {profile.age}</p>
        <p>Profile: {JSON.stringify(profile)}</p>
    </div>
  )
}

export default Profile