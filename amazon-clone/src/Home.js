import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://wallpaperaccess.com/full/3296133.png" alt="Amazon prime" />
                <div className="home__row">
                    <Product
                        id={1}
                        title="Html Begginer course"
                        price="29.99"
                        image="https://store-images.s-microsoft.com/image/apps.36736.13898118890231671.27500cc3-3164-4991-bf71-0c71291c12fb.96720775-1459-4dde-8867-344ae2e74963?mode=scale&q=90&h=300&w=300"
                        rating={5}
                    />
                    {/* Product */}
                    <Product id={2} title="Css Begginer course" price="29.99" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmEgUzpSJI-3oIZTzBj-VFo11FjImbG9vBQ&usqp=CAU" rating={4} />
                    {/* Product */}
                </div>
                <div className="home__row">
                    <Product
                        id={3}
                        title="Js Begginer course"
                        price="29.99"
                        image="data:image/png;base64,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"
                        rating={5}
                    />
                    {/* Product */}
                    <Product id={4} title="C++ Begginer course" price="34.99" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" rating={3} />
                    {/* Product */}
                    <Product id={5} title="Haskell Begginer course" price="14.99" image="https://cdn-icons-png.flaticon.com/512/5968/5968259.png" rating={4} />
                    {/* Product */}
                </div>
                <div className="home__row">
                    <Product id={6} title="Ethical hacking course" price="49.99" image="https://www.fusd.net/cms/lib/CA50000190/Centricity/Domain/2996/CTE%20logos-07.png" rating={5} />
                    {/* Product */}
                </div>
            </div>
        </div>
    );
}

export default Home;
