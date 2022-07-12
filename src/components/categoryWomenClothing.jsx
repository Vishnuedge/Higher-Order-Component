import React from 'react'
import ApiComponent from '../views/HigherOrderComponent/ApiComponent'

const CategoryWomen = ({ result }) => {
  return (
    <>
    <h1>Women's Clothing</h1>
    {
        result? result.map( (res , idx) => {
            return (
                <div key={idx}>
                 <p>{res.title}</p>
                </div>
            )
        }) : <p>Loading...</p>
    }
    </>
  )
}

export default  ApiComponent(CategoryWomen, `women's clothing` );