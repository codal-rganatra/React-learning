import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <section className="card">
        <img className ="card-image" src={img} alt={title} />
        <div className="card-details">
          <h3 className="card-title">
            {title}
          </h3>
          <section className="card-reviews">
            {star}{star}{star}{star}{star}
            <span className="total-reviews">4.5 {reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>
              <span>|</span>
              <span className="current-price">$ {newPrice}</span>
            </div>
          </section>
          <div className="bag">
            <BsFillBagHeartFill className='bag-icon'/> <span>Add to Bag</span>
          </div>
        </div>
      </section>
  )
}

export default Card