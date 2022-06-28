import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { CreateUserRequest } from "../../types/types";
import { createUserFailure, createUserSuccess } from "../../actions/authActions/authAction";
import { loginTypes } from "../../Actiontypes/loginTypes";
import { loginFailure, loginSuccess } from "../../actions/loginActions/loginAction";

const loginUser = (data: any) => {
    let requestBody = {
        query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        email: data.payload.email,
        password: data.payload.password,
      },
    };
    
  return axios({
    method: "POST",
    url: 'http://localhost:8000/graphql',
    data: requestBody
  });
};



function* fetchloginUser(payload: CreateUserRequest ):any {
  try {
    const response= yield call(loginUser,payload); // call act as axios ( api hit)

    yield put(
      //put act as dispatch
      loginSuccess({
        email: response.data.data.createUser.email,
        loading:false,
        success: true,
        message:""
      })
    
    );
  } catch (e: any) {
    console.log('yield error',e)
    yield put(
      loginFailure({
        message: e.message,
      })
    );
  }
}

function* authSaga() {
  yield all([takeLatest(loginTypes.LOGIN_REQUEST, fetchloginUser)]); //takeEvery == act as normal api calling(post, put), takeLatest is used for get request
}

export default authSaga;
