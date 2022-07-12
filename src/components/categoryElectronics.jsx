import React from 'react'
import ApiComponent from '../views/HigherOrderComponent/ApiComponent'

const categoryElectronics = ({ result, addOnedata , handleIncreaseData }) => {
  return (
    <>
    <h1>Electronics</h1>
    {
      result.slice( 0 , addOnedata ).map( (val, idx) => {
        return (
          <div key = {idx} >
            <p>{val.title}</p>
          </div>
        )
      } )
     }
    <button onClick={handleIncreaseData} >Add Data</button>
    </>
  
  )
}

export default ApiComponent(categoryElectronics, 'electronics')