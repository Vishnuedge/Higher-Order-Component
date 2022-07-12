import React from 'react'
import ApiComponent from '../views/HigherOrderComponent/ApiComponent'

const categoryElectronics = ({ result }) => {
  return (
    <>
    <h1>Electronics</h1>
    {
        result ? result.map( (res, idx) => {
            return (
                <div key={idx} >
                <p>{res.title}</p>
            </div>
            )
        }) : <p>loading</p>
    }
    </>
  
  )
}

export default ApiComponent(categoryElectronics, 'electronics')