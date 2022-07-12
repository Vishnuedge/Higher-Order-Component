import React, { useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products/category'


const ApiComponent = (Component , endPoint) => {
    const CategoriesHOF = function () {
        const [ result, setResult ] = React.useState([]);
        useEffect( () => {
            axios.get(`${API_URL}/${endPoint}`).then(
                (res) => setResult(res.data)
            )
        .catch(err => console.log(err))
        }, [result])
      return  <Component result = {result} />
    }
    return CategoriesHOF;
}


export default ApiComponent