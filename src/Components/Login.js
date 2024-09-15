import axios from 'axios'
import './style/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    axios.defaults.headers.common['Authorization'] = ``;

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleLogin = async () => {
        setIsError(false);
        setDisabled(true);

        axios.post('/login', {
            "username": username,
            "password": password
        })
            .then(function (response) {

                if (response.status === 200 && response.data) {
                    const AUTH_TOKEN = response.data.token;
                    axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

                    localStorage.setItem('token', AUTH_TOKEN);
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('role', response.data.roles);
                    localStorage.setItem('id', response.data.id);

                    if (response.data.roles[0].authority === "USER") {
                        navigate("/user/home")
                    } else if (response.data.roles[0].authority === "ADMIN") {
                        navigate("/admin/home")
                    } else if (response.data.roles[0].authority === "HANDLER") {
                        navigate("/handler")
                    }
                }
            })
            .catch(function (error) {
                setIsError(true);
                setDisabled(false);
            });
    }
    return (
        <div className="login-div">
            <div className='login-main'>
                {/* <md-linear-progress indeterminate style={{position:"absolute",top:"0",margin:"0",width:"100%"}}></md-linear-progress> */}
                <div className="login-ins">
                    <h1>Sign in</h1><p> to continue to portal</p>
                </div>
                <div className="login-log">
                    <md-outlined-text-field
                        label="Username"
                        placeholder="F00000"
                        class="text-fiell"
                        value={username}
                        onInput={(e) => setUsername(e.target.value)}
                        // errorText="Please verify your input"
                        // error={isError}
                    >
                    </md-outlined-text-field>

                    <md-outlined-text-field
                        type="password"
                        label="Password"
                        placeholder="%S5Gghu*$"
                        class="text-fiell"
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                        // error = {isError}
                        // errorText="Please verify your input"
                        >
                    </md-outlined-text-field>

                    <Link to={'/register/1'}>
                        <md-text-button class="button-primary">Create Account</md-text-button>
                    </Link>
                    <md-filled-button
                        class="button-primary"
                        id='login-btn'
                        onClick={() => handleLogin()}
                        >
                        Sign In
                    </md-filled-button>
                </div>
            </div>
        </div>);
}

export default Login;