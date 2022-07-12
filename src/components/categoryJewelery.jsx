import React from 'react'
import ApiComponent from '../views/HigherOrderComponent/ApiComponent'

const categoryJewellory = ({ result }) => {
  return (
    <>
    <h1>Jewelery</h1>
    {
        result? result.map( (res , idx) => {
            return (
                <div key={idx}>
                 <p>{res.title}</p>
                </div>
            )
        } ) : <p>Loading</p>
    }
    </>
  )
}

export default  ApiComponent(categoryJewellory, 'jewelery' );