import { authTypes } from "../../Actiontypes/authTypes";
import {
  UserRequestedPayload,
  AuthActions,
  CreatedUserInfo,
  UserRequestedfalied,
  alertMessage
} from "../../types/types";


export const createUserRequest = (payload: UserRequestedPayload ):AuthActions => ({
  type: authTypes.CREATE_USER_REQUEST,
  payload
});

export const createUserSuccess = (
  payload: CreatedUserInfo
): AuthActions => ({
  type: authTypes.CREATE_USER_SUCCESS,
  payload
});

export const createUserFailure = (
  payload: UserRequestedfalied
): AuthActions => ({
  type: authTypes.CREATE_USER_FAILURE,
  payload
});

export const showAlertAction = (
    payload:alertMessage
    ): AuthActions =>({
        type: authTypes.SHOW_ALERT_MESSAGE,
        payload
        
})
