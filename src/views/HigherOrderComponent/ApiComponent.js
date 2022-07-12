import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products/category'


const ApiComponent = (Component , endPoint) => {
    const CategoriesHOF = function () {
        const [ result, setResult ] = useState([]);
        const [ addOnedata, setAddOneData ] = useState(1);
        const handleIncreaseData = () => {
            setAddOneData(addOnedata + 1)
        }
        useEffect( () => {
            axios.get(`${API_URL}/${endPoint}`).then(
                (res) => setResult(res.data)
            )
        .catch(err => console.log(err))
        }, [result])
      return  <Component result = {result} addOnedata = {addOnedata} handleIncreaseData= {handleIncreaseData} />
    }
    return CategoriesHOF;
}


export default ApiComponent