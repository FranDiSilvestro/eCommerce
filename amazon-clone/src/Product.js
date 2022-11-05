import React from 'react'
import "./Product.css"

function Product() {
  return (
      <div className="product">
          <div className="product__info">
              <p>The lean startup</p>
              <p className="product__price">
                  <small>$</small>
                  <strong>19.99</strong>
              </p>
              <div className="product__rating">
                  <p>⭐</p>
              </div>
          </div>

          <img src="https://muhimasri.com/wp-content/uploads/2021/09/react-2-small.jpg" alt="product" />

          <button>Add to the basket</button>
      </div>
  );
}

export default Product