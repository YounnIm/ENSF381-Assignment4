import React, { useState, useContext } from 'react';
import { UserContext } from '../App'; // Import UserContext
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { setIsLoggedIn } = useContext(UserContext); // Use UserContext

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
    };

    return (
        <div>
            <Header />
            {isLogin ? <LoginForm onSwitch={() => setIsLogin(false)} onLogin={handleLogin} /> : <SignupForm onSwitch={() => setIsLogin(true)} />}
            <Footer />
        </div>
    );
};

export default LoginPage;