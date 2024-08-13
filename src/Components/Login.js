import './style/login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
    <div className="login-div">
        <div className='login-main'>
            <div className="login-ins">
            <h1>Sign in</h1><p> to continue to portal</p>
            </div>
            <div className="login-log">
            <md-outlined-text-field type="email" label="Email" placeholder="someone@example.com"  class="text-fiell" ></md-outlined-text-field>
            <md-outlined-text-field type="password" label="Password" placeholder="%S5Gghu*$"  class="text-fiell"></md-outlined-text-field>
            <md-text-button class="button-primary">Create Account</md-text-button>
            <Link to="/user"><md-filled-button class="button-primary">Sign In</md-filled-button></Link>
            
            </div>
        </div>
    </div> );
}
 
export default Login;