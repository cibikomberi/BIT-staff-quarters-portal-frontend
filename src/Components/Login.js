import axios from '../api/axios'
import './style/login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async () => {
        document.getElementById('login-btn').disabled = true
        document.getElementById('username').error = false;
        document.getElementById('pass').error = false;

        const username = document.getElementById('username').value;
        const pass = document.getElementById('pass').value;

        axios.post('/login', {
            "username": username,
            "password": pass
        })
        
            .then(function (response) {

                console.log(response);
                
                console.log(response.status === 200);
                if (response.status === 200 && response.data) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('role', response.data.roles);
                    localStorage.setItem('id', response.data.id);
                    console.log(response.data.roles[0].authority);
                    if (response.data.roles[0].authority === "USER") {
                        navigate("/user/home")
                    } else if (response.data.roles[0].authority === "ADMIN") {
                        navigate("/admin/home")
                    } else if (response.data.roles[0].authority === "HANDLER") {
                        navigate("/handler/home")
                    }
                } else {
                }
            })
            .catch(function (error) {
                document.getElementById('login-btn').disabled = false
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
                {/* <md-linear-progress indeterminate style={{position:"absolute",top:"0",margin:"0",width:"100%"}}></md-linear-progress> */}
                <div className="login-ins">
                    <h1>Sign in</h1><p> to continue to portal</p>
                </div>
                <div className="login-log">
                    <md-outlined-text-field id='username' type="email" label="Email" placeholder="someone@example.com" class="text-fiell" ></md-outlined-text-field>
                    <md-outlined-text-field id='pass' type="password" label="Password" placeholder="%S5Gghu*$" class="text-fiell"></md-outlined-text-field>
                    <Link to={'/register/1'}><md-text-button class="button-primary">Create Account</md-text-button></Link>
                    <md-filled-button class="button-primary" id='login-btn' onClick={() => handleLogin()}>Sign In</md-filled-button>

                </div>
            </div>
        </div>);
}

export default Login;