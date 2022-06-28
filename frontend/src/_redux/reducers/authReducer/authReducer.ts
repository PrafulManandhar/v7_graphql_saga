import { authTypes } from "../../Actiontypes/authTypes";
import { AuthActions } from "../../types/types";

const initialState: any = {
  loading: false,
  email:"",
  message:"",
  success: false,
  type:""
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case authTypes.CREATE_USER_REQUEST:
        console.log('createuser',action)
      return {
        ...state,
        loading: true,
      };
    case authTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        email: action.payload.email,
        message:`${action.payload.email} is registed successfully. Please login!`
      };
    case authTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        message: 'Failed to Register'
        
      };

      case authTypes.SHOW_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.payload.alertMessage ,
        type:action.payload.type
      };

      
    default:
      return {
        ...state,
      };
  }
};
