import { combineReducers } from 'redux';
import cart from './cartReducer';

const rootReducer = combineReducers({ cart });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
