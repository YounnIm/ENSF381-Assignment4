import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            <Header />
            {isLogin ? <LoginForm onSwitch={() => setIsLogin(false)} /> : <SignupForm onSwitch={() => setIsLogin(true)} />}
            <Footer />
        </div>
    );
};

export default LoginPage;
