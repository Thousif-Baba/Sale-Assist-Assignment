import React from 'react';
import "./index.css";

const Header = () => (
    <header className="header">
        <div className='navbar-container'>
            <h1 className='heading'>TANN TRIM</h1>
            <div>
                <img className='nav-icons' src='https://res.cloudinary.com/dnqgnmrup/image/upload/v1708096659/search_bqxszx.png' alt="search" />
                <img className='nav-icons' src='https://res.cloudinary.com/dnqgnmrup/image/upload/v1708096659/user-alt_plelag.png' alt="profile" />
                <img className='nav-icons' src='https://res.cloudinary.com/dnqgnmrup/image/upload/v1708096659/Bookmark_ljdosc.png' alt="saved" />
                <img className='nav-icons' src='https://res.cloudinary.com/dnqgnmrup/image/upload/v1708096659/shopping-bag_er4wh0.png' alt="cart" />
            </div>
        </div>
        <div className='categories-container'>
            <a className='category' href="/">Bags</a>
            <a className='category' href="/travel">Travel</a>
            <a className='category' href="/accessories">Accessories</a>
            <a className='category' href="/gifting">Gifting</a>
            <a className='category' href="/jewelery">Jewelery</a>
        </div>
    </header>
);

export default Header;