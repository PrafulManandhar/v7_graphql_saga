import { loginTypes } from "../../Actiontypes/loginTypes";
import {
  UserRequestedPayload,
  CreatedUserInfo,
  UserRequestedfalied,
  LoginAction
} from "../../types/types";


export const loginRequest = (payload: UserRequestedPayload ):LoginAction => ({
  type: loginTypes.LOGIN_REQUEST,
  payload
});

export const loginSuccess = (
  payload: CreatedUserInfo
): LoginAction => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload
});

export const loginFailure = (
  payload: UserRequestedfalied
): LoginAction => ({
  type: loginTypes.LOGIN_FAILURE,
  payload
});

