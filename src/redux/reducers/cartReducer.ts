import { ActionTypes } from './../actions/actionTypes';
import { IProduct } from 'type';
import { CartAction } from 'redux/actions/cartAction';

const cartReducer = (state: IProduct[] = [], action: CartAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return [...state, action.payload];
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    }

    case ActionTypes.CLEAR_CART: {
      return [];
    }

    default:
      return state;
  }
};

export default cartReducer;
