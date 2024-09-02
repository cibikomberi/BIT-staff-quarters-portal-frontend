import axios from '../api/axios';
import './style/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async () => {
        document.getElementById('username').error = false;
        document.getElementById('pass').error = false;

        const username = document.getElementById('username').value;
        const pass = document.getElementById('pass').value;

        axios.post('/login', {
            "username": username,
            "password": pass
        })
        
            .then(function (response) {

                console.log(response.status === 200);
                localStorage.setItem('token', response.data.token);
                if (response.status === 200 && response.data) {
                    console.log(response.data);
                    if (response.data.roles[0] === "ROLE_USER") {
                        navigate("/user/home")
                    } else if (response.data.roles[0] === "ROLE_ADMIN") {
                        navigate("/admin/home")
                    } else if (response.data.roles[0] === "ROLE_HANDLER") {
                        navigate("/handler/home")
                    }
                } else {
                }
            })
            .catch(function (error) {
                document.getElementById('username').error = true;
                document.getElementById('username').errorText = "Please verify your input";
                document.getElementById('pass').error = true;
                document.getElementById('pass').errorText = "Please verify your input";
                console.log(error.response);
                document.getElementById('username').value = error
            });
    }
    return (
        <div className="login-div">
            <div className='login-main'>
                <div className="login-ins">
                    <h1>Sign in</h1><p> to continue to portal</p>
                </div>
                <div className="login-log">
                    <md-outlined-text-field id='username' type="email" label="Email" placeholder="someone@example.com" class="text-fiell" ></md-outlined-text-field>
                    <md-outlined-text-field id='pass' type="password" label="Password" placeholder="%S5Gghu*$" class="text-fiell"></md-outlined-text-field>
                    <md-text-button class="button-primary">Create Account</md-text-button>
                    <md-filled-button class="button-primary" onClick={() => handleLogin()}>Sign In</md-filled-button>

                </div>
            </div>
        </div>);
}

export default Login;