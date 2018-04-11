import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ title,price, quantity }) => (
    <div>
        {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
)

Product.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string
}

export default Product;
