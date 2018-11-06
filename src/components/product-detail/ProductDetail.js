import React, { Component } from 'react';
import './ProductDetail.css';
import * as ProductDetailService from './ProductDetail.service';

class ProductDetail extends Component {

    state = {
        product: {}
    }

    componentDidMount() {
        ProductDetailService.getById(this.props.productSelected)
            .then((product) => {
                this.setState(() => ({ product }))
            });

    }

    render() {

        const { product } = this.setState;
        return (
            <div id='container-detail'>{product}</div>
        );
    }
}

export default ProductDetail;