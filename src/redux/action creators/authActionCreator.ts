import { Dispatch } from 'react';
import { AuthAction } from 'redux/actions/authAction';
import AuthService from 'services/AuthService';
import { ActionTypes } from '../actions/actionTypes';

export const login = (payload: { email: string; password: string }) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: ActionTypes.LOGIN_PENDING });
    try {
      const data = await AuthService.login(payload);
      dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.LOGIN_ERROR,
        payload: error?.response?.data?.message,
      });
    }
  };
};

export const logout = (): AuthAction => {
  return {
    type: ActionTypes.LOGOUT,
  };
};
