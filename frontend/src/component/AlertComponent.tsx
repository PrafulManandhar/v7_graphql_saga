import React, {FC, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showAlertAction } from '../_redux/actions/authActions/authAction';
import { RootState } from '../_redux/reducers/rootReducer';
import {Alert} from 'antd'

const AlertComponent:FC=()=> {
    const dispatch = useDispatch();
    const { alertMessage , type} = useSelector((state: RootState) => state.auth);

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(showAlertAction({alertMessage:"", type:""}))
        },9000)
    },[])
    
    return (
      <div className='alert-message'>
        {alertMessage &&   <Alert message={alertMessage} type={type} showIcon />}
      
      </div>
    );
}

export default AlertComponent;