import { IProduct } from 'type';
import { ActionTypes } from './actionTypes';

export const addToCart = (payload: IProduct) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload: string) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = (payload: string) => {
  return {
    type: ActionTypes.CLEAR_CART,
    payload,
  };
};

export type CartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof clearCart>;
