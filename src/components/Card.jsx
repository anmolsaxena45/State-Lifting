import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setName(e.target.value)} />
      <p>Name state variable value inside Child Card : {props.name}</p>
    </div>
  )
}

export default Card
