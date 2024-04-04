import React, { useState } from 'react';

const SignupForm = ({ onSwitch }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [email, setEmail] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
	
		// Perform signup operation
		fetch('http://127.0.0.1:5000/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password,
				email: email
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data.message === 'User registered successfully') {
				alert('User registered successfully');
			} else {
				alert(data.message);
			}
		})
		.catch((error) => {
			console.error('Error:', error);
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
		<div>
		<label>Confirm Password:</label>
		<input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
		</div>
		<div>
		<label>Email:</label>
		<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
		</div>
		<button type="submit">Signup</button>
		<button type="button" onClick={onSwitch}>Switch to Login</button>
		</form>
	);
};

export default SignupForm