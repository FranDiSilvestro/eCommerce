import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://images.squarespace-cdn.com/content/v1/53441df2e4b00c883f89267c/1535058224559-2LFPHY3FJI9PC0HOA8WZ/Hack-Logo.png" alt="Website Logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLine1">Hello Guest</span>
                    <span className="header__optionLine2">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLine1">Returns</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLine2 header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
