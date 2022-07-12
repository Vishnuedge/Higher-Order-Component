import React from 'react'
import HigherOrderComponent from '../views/HigherOrderComponent/HigherOrderComponent'

const ComponentThree = ({ values ,incrementingValue }) => {
  return (
    <>
    <p>{values}</p>
    <button onClick={incrementingValue} > Plus 10 </button>
    </>

  )
}

export default HigherOrderComponent(ComponentThree, 10);