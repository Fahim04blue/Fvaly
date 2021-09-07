import { IProduct } from 'type';
import { ActionTypes } from './actionTypes';

interface addToCartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: IProduct;
}
interface removeFromCartAction {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: string;
}
interface clearCartAction {
  type: ActionTypes.CLEAR_CART;
}

export type CartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction;
