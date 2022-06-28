import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../_redux/reducers/rootReducer";
import { loginSuccess, logout } from "../_redux/actions/loginActions/loginAction";



const Navbar: FC = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { success, email } = useSelector((state: RootState) => state.login);

  const logoutUser = ()=>{
    dispatch(logout());
    navigate('/')
  }

  return (
    <nav className="nav-wrapper">
      <div className="container nav-container">
        <div className='menu-wrapper'>
        <Link to="/" className="menu-item">Home</Link>
        </div>
        {success && email ? <div className='logout-wrapper'>
          <div className="nav-item" onClick={()=>logoutUser()}>Logout</div>
          <div className='login-name'>{email.split("@")[0]}</div>
        </div>:     <div className="signin-signup">
            <Link to="/signup" className="nav-item">Sign up</Link>
            <Link to="/signin" className="nav-item">Sign in</Link>
        </div>}
   
      </div>
    </nav>
  );
};

export default Navbar;
