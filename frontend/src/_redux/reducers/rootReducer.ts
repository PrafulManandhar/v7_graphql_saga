import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import loginReducer from "./loginReducer/loginReducer";

const appReducer = combineReducers({
  auth: authReducer,
  login: loginReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = (state:any, action:any) => {
    return appReducer(state, action);
}

export default rootReducer;
