import React from 'react';
import './Product.css';

function Product(props) {


    let { product } = props;

    return (
        <div className='card-product'>
            <div className='img-product' style={{ backgroundImage: `url(${product.image})` }} />
            <div className='name-product'>{product.name}</div>
            <div className='money'>R${product.value}</div>
        </div>
    );
}

export default Product;