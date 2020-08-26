import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>


            <div className="margin-left">
                <h3 className="product-name">{name}</h3>
                <br />
                <p>by: {seller}</p>
                <h3> ${price}</h3>

                <p>only {stock} left in stock - order soon</p>
                <button 
                className="button"
                onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart
                    </button>


            </div>

        </div>
    );
};

export default Product;

