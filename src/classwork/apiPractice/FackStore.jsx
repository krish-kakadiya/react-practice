import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

const FackStore = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setProducts(res.data))
  }, [])

  return (
    <div className="store-container">
      <h1 className="store-title">🛒 Fake Store</h1>
      <div className="product-grid">
        {products.map((val, index) => (
          <div key={index} className="product-card">
            <img src={val.image} alt={val.title} className="product-img" />
            <h2 className="product-title">{val.title}</h2>
            <h3 className="product-price">${val.price}</h3>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FackStore
