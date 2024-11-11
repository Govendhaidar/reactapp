import React from 'react'

const StarRating = ({starRating}) => {
    const maxstars = 5
    const filledStars = Math.min(starRating, maxstars)
    const emptyStars = maxstars - filledStars
  return (
    <div className="star-rating">
        {
            [...Array(filledStars)].map((_, index) => (
                <i key={index} className="fa-sharp fa-solid fa-star"></i>
            ))
        }

        {
            [...Array(emptyStars)].map((_, index) => (
                <i key={index} className="fa-sharp fa-regular fa-star"></i>
            ))
        }
    </div>
  )
}

export default StarRating