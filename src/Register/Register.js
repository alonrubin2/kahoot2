import React, { useState, useContext } from 'react';
import './register.scss';
import { UserContext } from '../contexts/UserContext'
import { useHistory } from 'react-router-dom';
import environment from '../environments/index';





const Register = () => {

    const history = useHistory();

    const { user, setUser } = useContext(UserContext)

    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const checkUsername = () => {
        if (username.length >= 4) {
            setIsValidUsername(true);
        }
        if (username.length < 4) {
            setIsValidUsername(false);
        }

    }

    const checkPassword = () => {
        if (password.length >= 6 && password.length <= 20) {
            setIsValidPassword(true);
        }

    }

    console.log(username, password)

    async function submit(e) {
        e.preventDefault();
        try {
            const values = { username: username, password: password }
            console.log(values)
            const res = await fetch(environment.apiUrl + '/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            if (res.status === 201) {
                // history.push('/login');
                return;
            }
        }
        catch (err) {
            console.log('Failure! Please try again');
            console.log(err);
        };
    }

    return (
        <div className="Register">
            <h1>Please register</h1>

            <form className="register-form">

                <div className="register-form-group">
                    <label>Username</label>
                    <input onChange={(e) => {
                        setUsername(e.target.value);
                        checkUsername();
                    }}
                        id="username" type="text" placeholder="username" required />
                </div>

                <div className="register-form-group">
                    <label>Password</label>
                    <input onChange={(e) => {
                        setPassword(e.target.value);
                        checkPassword();
                    }}
                        id="password" type="password" placeholder="password" />
                </div>
                {isValidUsername && isValidPassword ? <button className="active" onClick={(e) => submit(e)} type="submit" value="submit">Submit</button> : <button className="disabled" disabled>Submit</button>}


            </form>
        </div>
    );
}

export default Register;