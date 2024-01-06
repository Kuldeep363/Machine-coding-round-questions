import React, { useEffect, useState } from 'react'
import Star from '../ui/star-rating/star';

const StarRating = () => {
  const [rating, setRating] = useState(2);

  useEffect(()=>{
    const stars = document.getElementById("stars");
    stars.addEventListener("click",(e)=>{
      const {key} = e.target.dataset;
      if(key){
        setRating(key);
      }
    })
    return ()=>stars.removeEventListener("click",(e)=>{
      const {key} = e.target.dataset;
      if(key){
        setRating(key);
      }
    })
  },[])
  return (
    <div>
      <h2>Star Rating</h2>
        <div className="feature-wrapper">
          <div className="card">
            <div className="d-flex" id='stars'>
              {
                [...Array(5)].map((_,index)=>{
                  return <Star rating={rating} key={index} value={index+1} />
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default StarRating
