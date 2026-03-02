import React, { useState } from 'react';
import { mockCredentials } from '../mock/credentials';
import { LoginProps } from '../types';

const LoginPage: React.FC<LoginProps> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { username, password });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <h2>Mock Credentials</h2>
            <ul>
                {mockCredentials.map((cred, index) => (
                    <li key={index}>
                        {cred.username} / {cred.password}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoginPage;