import React from 'react';
import AlertComponent from '../component/AlertComponent';
import Navbar from '../component/navbar';
import SignInForm from '../component/SigninForm';

function SignInPage() {
    return (
        <div>
            <Navbar/>
            <SignInForm />
            <AlertComponent/>
        </div>
    );
}

export default SignInPage;