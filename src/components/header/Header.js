import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;