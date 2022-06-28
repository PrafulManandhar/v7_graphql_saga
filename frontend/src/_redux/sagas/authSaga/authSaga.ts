import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { authTypes } from "../../Actiontypes/authTypes";
import { CreateUserRequest } from "../../types/types";
import { createUserFailure, createUserSuccess } from "../../actions/authActions/authAction";

const createUser = (data: any) => {
    let requestBody = {
        query: `
          mutation CreateUser($email: String!, $password: String!) {
            createUser(userInput: {email: $email, password: $password}) {
              _id
              email
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



function* fetchCreateUser(payload: CreateUserRequest ):any {
  try {
    const response= yield call(createUser,payload); // call act as axios ( api hit)

    yield put(
      //put act as dispatch
      createUserSuccess({
        email: response.data.data.createUser.email,
        loading:false,
        success: true,
        message:""
      })
    
    );
  } catch (e: any) {
    console.log('yield error',e)
    yield put(
      createUserFailure({
        message: e.message,
      })
    );
  }
}

function* authSaga() {
  yield all([takeLatest(authTypes.CREATE_USER_REQUEST, fetchCreateUser)]); //takeEvery == act as normal api calling(post, put), takeLatest is used for get request
}

export default authSaga;
