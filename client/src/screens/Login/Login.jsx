import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const { username, password } = formData;
    const { error, handleLogin } = props;
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="container-login">
            <form
                className="border1-login"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(formData);
                    history.push('/posts')
                }}>
                <h3>Login</h3>
                {
                    error &&
                    <p>{error}</p>
                }
                <div className="border-login">
                    <label>
                        <p className="p-login">Username:</p>
                        <input
                            type="text"
                            value={username}
                            name="username"
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p className="p-login">Password:</p>
                        <input
                            type="password"
                            value={password}
                            name="password"
                            onChange={handleChange}
                        />
                    </label>
                    <Link to='/register'>Register</Link>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    )
}
