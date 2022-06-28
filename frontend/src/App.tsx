import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "./_redux/actions/postsActions/postsActions";
import { RootState } from "./_redux/reducers/rootReducer";
import { Routes, Route, Link } from "react-router-dom";
import MainDash from "./page/MainDash";
import SignInPage from "./page/SignInPage";
import SignupPage from "./page/SignupPage";


const App = () => {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  // useEffect(() => {
  //   dispatch(fetchPostsRequest({email:'nilaa@gmail.com',password:'P@ssw0rd'}));
  // }, []);

  return (
    <div>
      {/* {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : 
        (posts?.map((todo, index) => (
          <div key={todo.id}>
            {++index}. {todo.title}
          </div>
        )))
      } */}
      <Routes>
        <Route path="/" element={<MainDash />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
