import React from "react";
import "./index.css"

const ProductTypes = () => {

    return (
        <div>
            <div className="types-container">
                <div className="type">
                    <img id="allBags" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104188/Frame_461_y5n9vs.png" alt="All Bags" />
                    <label className="label" htmlFor="allBags">All Bags</label>
                </div>
                <div className="type">
                    <img id="vanityPouch" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104187/Frame_50_gaedsr.png" alt="Vanity Pouch" />
                    <label className="label" htmlFor="vanityPouch">Vanity Pouch</label>
                </div>
                <div className="type">
                    <img id="toteBag" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104187/Frame_49_whmqt0.png" alt="Tote Bag" />
                    <label className="label" htmlFor="toteBag">Tote Bag</label>
                </div>
                <div className="type">
                    <img id="duffleBag" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104187/Frame_13_sfpaon.png" alt="Duffle Bag" />
                    <label className="label" htmlFor="duffleBag">Duffle Bag</label>
                </div>
                <div className="type">
                    <img id="laptopSleeve" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104187/Frame_49_1_kmypxs.png" alt="Laptop Sleeve" />
                    <label className="label" htmlFor="laptopSleeve">Laptop Sleeve</label>
                </div>
                <div className="type">
                    <img id="messengerBags" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104187/Frame_49_2_q2a3gb.png" alt="Messenger Bags" />
                    <label className="label" htmlFor="messengerBags">Messenger Bags</label>
                </div>
                <div className="type">
                    <img id="slingsBags" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104187/Frame_22_zoivbx.png" alt="Slings Bags" />
                    <label className="label" htmlFor="slingsBags">Slings Bags</label>
                </div>
                <div className="type">
                    <img id="handBags" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104187/Frame_20_omccv3.png" alt="Handbags" />
                    <label className="label" htmlFor="handBags">Handbags</label>
                </div>
                <div className="type">
                    <img id="bucketBag" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708104187/Frame_46_d0uuao.png" alt="Bucket Bag" />
                    <label className="label" htmlFor="bucketBag">Bucket Bag</label>
                </div>
            </div>
            <div className="category-display-container">
                <p className="category-display">Bags <span className="dot">.</span> Backpacks</p>
                <div className="total-products">
                    8 Products
                    <img className="share" src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708145106/Vector_4_htodaa.png" alt="share" />
                </div>
            </div>
        </div>
    )
}

export default ProductTypes;