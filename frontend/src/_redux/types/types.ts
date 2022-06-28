import { IPost } from "../../models/IPost";
import { authTypes } from '../Actiontypes/authTypes'
import { loginTypes } from "../Actiontypes/loginTypes";

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface CreatedUserInfo {
  email: string,
  loading:boolean,
  success:boolean,
  message:String
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface alertMessage {
  alertMessage: String,
  type: String
}

export interface UserRequestedPayload {
  email: String;
  password: String;
}

export interface UserRequestedfalied {
  message: String;
}

export interface CreateUserRequest {
  type: typeof authTypes.CREATE_USER_REQUEST;
  payload :UserRequestedPayload ;
}

export type CreateUserSuccess = {
  type: typeof authTypes.CREATE_USER_SUCCESS;
  payload: CreatedUserInfo;
};

export type CreateUserFailure = {
  type: typeof authTypes.CREATE_USER_FAILURE;
  payload: UserRequestedfalied
};

export interface LoginRequest {
  type: typeof loginTypes.LOGIN_REQUEST;
  payload :UserRequestedPayload ;
}

export type LoginSuccess = {
  type: typeof loginTypes.LOGIN_SUCCESS;
  payload: CreatedUserInfo;
};

export type LoginFailure = {
  type: typeof loginTypes.LOGIN_FAILURE;
  payload: UserRequestedfalied
};

export type ShowAlertMessage = {
  type: typeof authTypes.SHOW_ALERT_MESSAGE;
  payload: alertMessage
};

  export type AuthActions = 
  | CreateUserRequest
  | CreateUserSuccess
  | CreateUserFailure
  | ShowAlertMessage;

  export type LoginAction = 
  | LoginRequest
  | LoginSuccess
  | LoginFailure;
