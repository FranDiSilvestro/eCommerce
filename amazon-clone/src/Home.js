import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
      <div className="home">
          <div className="home__container">
              <img className="home__image" src="https://wallpaperaccess.com/full/3296133.png" alt="Amazon prime" />
              <div className="home__row">
                  <Product />
                  {/* Product */}
                  <Product />
                  {/* Product */}
              </div>
              <div className="home__row">
                  <Product />
                  {/* Product */}
                  <Product />
                  {/* Product */}
                  <Product />
                  {/* Product */}
              </div>
              <div className="home__row">
                  <Product />
                  {/* Product */}
              </div>
          </div>
      </div>
  );
}

export default Home