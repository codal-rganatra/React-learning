import React from 'react'
import './nav.css'
import { FiHeart } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'


const Navigation = ({query, handleinputchange}) => {
  return (
    <nav>
        <div className="nav-container">
          <input type="text" className="search-input" placeholder='Enter your search shoes' onChange={handleinputchange} value={query}/>
        </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className='nav-icons' />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className='nav-icons' />
          </a>
          <a href="#">
            <AiOutlineUserAdd className='nav-icons' />
          </a>
        </div>
    </nav>
  )
}

export default Navigation