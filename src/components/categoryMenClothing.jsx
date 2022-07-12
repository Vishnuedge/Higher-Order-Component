import React from 'react'
import ApiComponent from '../views/HigherOrderComponent/ApiComponent'

const CategoryMenClothing = ({ result }) => {
  return (
    <>
    <h1>Men's Cloting</h1>
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

export default  ApiComponent(CategoryMenClothing, `men's clothing` );