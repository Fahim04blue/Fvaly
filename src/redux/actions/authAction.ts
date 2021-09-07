import { IAuthData } from 'type';
import { ActionTypes } from './actionTypes';

interface loginPendingAction {
  type: ActionTypes.LOGIN_PENDING;
}
interface loginSuccessAction {
  type: ActionTypes.LOGIN_SUCCESS;
  payload: IAuthData;
}

interface loginErrorAction {
  type: ActionTypes.LOGIN_ERROR;
  payload: string;
}

interface logoutAction {
  type: ActionTypes.LOGOUT;
}

export type AuthAction =
  | loginPendingAction
  | loginSuccessAction
  | loginErrorAction
  | logoutAction;
