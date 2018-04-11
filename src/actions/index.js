
import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const addToCartUnsafe = productId => ({
    type:types.ADD_TO_CART,
    productId
})

export  const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}

const receiveProducts =  (products) => ({
    type:types.RECEIVE_PRODUCTS,
        products
})


export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}
