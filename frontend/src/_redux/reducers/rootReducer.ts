import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import postReducer from "./postsReducer/postsReducer";

const appReducer = combineReducers({
  posts: postReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = (state:any, action:any) => {
    return appReducer(state, action);
}

export default rootReducer;
