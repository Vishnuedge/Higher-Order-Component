import React, { useState } from 'react'


const HigherOrderComponent = (Component , incrementValue) => {
    const HOCFunction=  () => {
        const [ values, setValues ] = useState(0);
        const incrementingValue = () => {
            setValues(values + incrementValue);
        }
      return <Component values = {values} incrementingValue = {incrementingValue}  />
    }
    return HOCFunction;
}


export default HigherOrderComponent