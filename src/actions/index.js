import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

const receiveFarmers = farmers => ({
  type: types.RECEIVE_FARMERS,
  farmers: farmers
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const getAllFarmers = () => dispatch => {
  shop.getFarmers(farmers => {
    dispatch(receiveFarmers(farmers))
  })
}
