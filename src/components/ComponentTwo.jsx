import React from 'react'
import HigherOrderComponent from '../views/HigherOrderComponent/HigherOrderComponent'

const ComponentTwo = ({ values , incrementingValue }) => {
  return (
    <>
        <p>{values}</p>
        <button onClick={incrementingValue} > Plus 2 </button>
    </>
  )
}

export default HigherOrderComponent(ComponentTwo , 2) 
