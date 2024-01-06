import React from 'react'

const Star = ({rating,value}) => {
  return (
    <div data-key={value} style={{color: value<= rating?"gold":"#c2c1be",fontSize:"50px",cursor:"pointer"}}>
        ★
    </div>
  )
}

export default Star
