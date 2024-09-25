import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
    const navigate = useNavigate();

    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [designation, setDesignation] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleNewUser = () => {
        if (role) {
            if (password === passwordConfirm) {
                const formData = new FormData();
                formData.append('data', new Blob([JSON.stringify({
                    'username': username,
                    'name': name,
                    'email': email,
                    'phone': phone,
                    'designation': designation
                })], { type: "application/json" }))
                formData.append('password', password)
                axios.post(`/register/${role.toString().toLowerCase()}`, formData)
                    .then((res) => {
                        if (res.status === 200) {
                            navigate(-1);
                        }
                    }).catch((err) => {                        
                        setErrorMessage(err.message + ' ' + err.code)
                        if (err.response && err.response.data && !err.response.data.message) {
                            setErrorMessage(err.response.data)
                        }
                        if (err.response && err.response.data && err.response.data.message) {
                            setErrorMessage(err.response.data.message)
                        }
                    })
            } else {
                setErrorMessage("Password Mismatch")
            }
        } else {
            setErrorMessage("Role cannot be empty")
        }
    }
    return (
        <div className='main-area'>
            <md-outlined-select
                label="Role"
                class="input-field"
                value={role}
                onInput={(e) => setRole(e.target.value)}
            >
                <md-select-option value="Admin">
                    <div slot="headline">Admin</div>
                </md-select-option>
                <md-select-option value="Security">
                    <div slot="headline">Security</div>
                </md-select-option>
            </md-outlined-select>

            <md-outlined-text-field
                type="text"
                label="Username"
                class="input-field"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
            >
            </md-outlined-text-field>
            <md-outlined-text-field
                type="text"
                label="Name"
                class="input-field"
                value={name}
                onInput={(e) => setName(e.target.value)}
            >
            </md-outlined-text-field>
            <md-outlined-text-field
                type="email"
                label="Email"
                class="input-field"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
            >
            </md-outlined-text-field>
            <md-outlined-text-field
                type="number"
                label="Phone"
                class="input-field"
                value={phone}
                onInput={(e) => setPhone(e.target.value)}
            >

            </md-outlined-text-field>
            <md-outlined-text-field
                type="text"
                label="Designation"
                class="input-field"
                value={designation}
                onInput={(e) => setDesignation(e.target.value)}
            >
            </md-outlined-text-field>

            <md-outlined-text-field
                type="password"
                label="Password"
                class="input-field"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
            >
            </md-outlined-text-field>
            <md-outlined-text-field
                type="password"
                label="Confirm Password"
                class="input-field"
                value={passwordConfirm}
                onInput={(e) => setPasswordConfirm(e.target.value)}
            >
            </md-outlined-text-field>

            <p style={{ color: "red" }}>{errorMessage}</p>
            <md-filled-button class="button-primary" onClick={() => handleNewUser()}>Submit</md-filled-button>

        </div>
    );
}

export default NewUser;