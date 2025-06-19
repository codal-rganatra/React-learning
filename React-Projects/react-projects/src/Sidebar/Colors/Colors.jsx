import React from 'react'
import Input from '../../components/Input'

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">
        Color
      </h2>
      <div className='ml'>
        <Input 
        handleChange = {handleChange}
        value = ""
        title="All"
        name="test3"
        color="purple"
        />
        <Input 
        handleChange = {handleChange}
        value = "black"
        title="Black"
        name="test3"
        color="black"
        />
        <Input 
        handleChange = {handleChange}
        value = "blue"
        title="Blue"
        name="test3"
        color="blue"
        />
        <Input 
        handleChange = {handleChange}
        value = "red"
        title="Red"
        name="test3"
        color="red"
        />
        <Input 
        handleChange = {handleChange}
        value = "green"
        title="Green"
        name="test3"
        color="green"
        />
        <Input 
        handleChange = {handleChange}
        value = "white"
        title="White"
        name="test3"
        color="white"
        />
      </div>
    </div>
  )
}

export default Colors