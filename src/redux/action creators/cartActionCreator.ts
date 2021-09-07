import { CartAction } from 'redux/actions/cartAction';
import { IProduct } from 'type';
import { ActionTypes } from '../actions/actionTypes';

export const addToCart = (payload: IProduct): CartAction => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload: string): CartAction => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = (): CartAction => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};
