
import React from 'react';
import { Link } from 'react-router-dom';

// Created a login page
const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" /><br></br>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" /><br></br>
                <button type="submit">Login</button>
            </form>
            <Link to="/signup">Don't have an account?</Link>
        </div>
    );
}

export default Login;