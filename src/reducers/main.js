import { RECEIVE_PRODUCTS, RECEIVE_FARMERS } from '../constants/ActionTypes'


export default function data(state={}, action) {
  console.log(action);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        products: action.products,
        ...state
      }
    case RECEIVE_FARMERS:
      return {
        farmers: action.farmers,
        ...state
      }
    default:
      return state
  }
}