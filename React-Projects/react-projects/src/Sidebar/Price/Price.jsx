import React from 'react'
import './price.css'
import Input from '../../components/Input'

const Price = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">
        Price
      </h2>
      <div className='ml'>
        <Input 
        handleChange = {handleChange}
        value = ""
        title="All"
        name="test2"
        />
        <Input 
        handleChange = {handleChange}
        value = {50}
        title="$50 - $100"
        name="test2"
        />
        <Input 
        handleChange = {handleChange}
        value = {100}
        title="$100 - $150"
        name="test2"
        />
        <Input 
        handleChange = {handleChange}
        value = {150}
        title="$150 - $200"
        name="test2"
        />
        <Input 
        handleChange = {handleChange}
        value = {200}
        title="Over $200"
        name="test2"
        />
      </div>
    </div>
  )
}

export default Price