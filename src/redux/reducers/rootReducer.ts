import { combineReducers } from 'redux';
import cart from './cartReducer';
import auth from './authReducer';

const rootReducer = combineReducers({ cart, auth });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
