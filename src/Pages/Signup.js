
import React from 'react';
import { Link } from 'react-router-dom';

// Created a signup page
const Signup = () => {
    return (
        <div>
            <h1>Signup</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" /><br></br>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" /><br></br>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password" id="password" /><br></br>
                <button type="submit">Signup</button>
            </form>
            <Link to="/login">Already have an account?</Link>
        </div>
    );
}

export default Signup;