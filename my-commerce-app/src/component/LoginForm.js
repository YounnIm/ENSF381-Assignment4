import React, { useState } from 'react';

const LoginForm = ({ onSwitch, onLogin }) => { // Add onLogin prop
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform login operation
        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Login failed');
            }
        })
        .then(data => {
            alert('Login successful');
            onLogin(); // Call onLogin after a successful login
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(error.message);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
        <label>Username:</label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
        <label>Password:</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={onSwitch}>Switch to Signup</button>
        </form>
    );
};

export default LoginForm;