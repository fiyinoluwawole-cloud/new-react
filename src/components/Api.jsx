import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Api = () => {
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     fetch("").then(res => res.json()).then(data => console.log(data.products))
    // }, [])

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(data => setProducts(data.data.products))
    }, [])

  return (
    <div>
     <h1>Products:</h1>
     {
        products.map((product) => 
            <div>
                <img src={product.images[0]} alt="" />
                <h3>{product.title}</h3>
                <h2>{product.price}</h2>
                <h2>{product.category}</h2>
                <h2>{product.description}</h2>
                <Link to={`productdetails/${product.id}`}>See more</Link>
            </div>
        )
     } 
    </div>
  )
}

export default Api
