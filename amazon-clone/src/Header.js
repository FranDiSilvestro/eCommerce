import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="#" alt="Website Logo" />
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                {/* Logo */}
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
            </div>
        </div>
    );
}

export default Header;
