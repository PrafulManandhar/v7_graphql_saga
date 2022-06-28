import React, { FC } from "react";
import Navbar from "../component/navbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../_redux/reducers/rootReducer";
import { Alert } from 'antd';
import AlertComponent from "../component/AlertComponent";


const MainDash: FC = () => {
  // const dispatch = useDispatch();
  const { message } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <Navbar />
      <div className="welcome-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h1>
                Sample app with GraphQL, ANTD with react-hook-form ,Redux saga
              </h1>
            </div>
          </div>
        </div>
      </div>
      <AlertComponent/>
    {/* {message&&  <div className=""   <Alert message="Success Tips" type="success" showIcon />
 } */}
    </div>
  );
};

export default MainDash;
