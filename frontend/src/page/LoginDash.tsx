import React, { FC } from "react";
import Navbar from "../component/navbar";

import AlertComponent from "../component/AlertComponent";


const LoginDash: FC = () => {
  // const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className="welcome-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h1>
              Welcome to dashboard .Your login in! 
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDash;
