import { loginTypes } from "../../Actiontypes/loginTypes";
import { LoginAction } from "../../types/types";

const initialState: any = {
  loading: false,
  email:"",
  message:"",
  success: false,
  type:""
};

export default (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case loginTypes.LOGIN_REQUEST:
        console.log('createuser',action)
      return {
        ...state,
        loading: true,
      };
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        email: action.payload.email,
        message:`${action.payload.email} is registed successfully. Please login!`
      };
    case loginTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        message: 'Failed to Register'
        
      };
      
    default:
      return {
        ...state,
      };
  }
};
