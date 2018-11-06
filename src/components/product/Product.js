import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {


    let { product, productSelected } = props;

    return (
        <div className='card-product'>
            <Link to={{ pathname: '/detail/' + product.id }} onClick={() => productSelected(product.id)}>
                <div className='img-product' style={{ backgroundImage: `url(${product.image})` }} />
                <div className='name-product'>{product.name}</div>
                <div className='money'>R${product.value}</div>
            </Link>
        </div >
    );
}

export default Product;