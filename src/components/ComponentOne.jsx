import React from 'react'
import HigherOrderComponent from '../views/HigherOrderComponent/HigherOrderComponent'

const ComponentOne = ({ values, incrementingValue }) => {
  return (
    <>
        <p>{values}</p>
        <button onClick={incrementingValue} >Plus 1 </button>
    </>
  )
}

export default HigherOrderComponent(ComponentOne , 1)