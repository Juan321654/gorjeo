import React, { useState } from 'react'
import './SignUp.css'

export default function SignUp(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const { username, email, password } = formData;
    const { error, handleRegister } = props;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="container-sign">
            <form
                className="form-sign"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleRegister(formData);
                }}>
                <h3>Register</h3>
                {
                    error &&
                    <p>{error}</p>
                }
                <div className="border-cont-sign">
                    <label className="label-sign">
                        <p className="p-sign">Username:</p>
                        <input
                            type="text"
                            value={username}
                            name="username"
                            onChange={handleChange}
                        />
                    </label>
                    <label className="label-sign">
                        <p className="p-sign">Email:</p>
                        <input
                            type="text"
                            value={email}
                            name="email"
                            onChange={handleChange}
                        />
                    </label>
                    <label className="label-sign">
                        <p className="p-sign">Password:</p>
                        <input
                            type="password"
                            value={password}
                            name="password"
                            onChange={handleChange}
                        />
                    </label>
                    <div className="btn-sign">
                        <button >Register</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
