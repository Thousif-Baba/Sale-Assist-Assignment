
import React from 'react';
import "./index.css";

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <img className='badge' src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708143957/Bookmark_ucs0rv.png" alt="badge" />
        <h3 className='product-name'>{product.name}</h3>
        <div className='price-and-cart-container'>
            <div className='price-container'>
                <p className="discounted-price">{product.discountedPrice}</p>
                <p className="original-price">{product.originalPrice}</p>
                <p className="discount-percent">&#40;50% Off&#41;</p>
            </div>
            <img className='add-bag' src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708144179/Group_451_qz3nzw.png" alt='add-bag' />
        </div>
    </div>
);

export default ProductCard;