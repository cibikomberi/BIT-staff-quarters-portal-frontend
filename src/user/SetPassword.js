import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SetPassword = () => {

    if (document.getElementById("profile-dialog")) {
        document.getElementById("profile-dialog").close();
    }

    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const isNewUser = location.pathname.split('/')[1] === 'register';

    const handleSubmit = async () => {
        if (password === passwordConfirmed) {
            if (isNewUser) {
                const data = location.state.data;
                const image = location.state.image;
                const formData = new FormData();
                formData.append("image", image);
                formData.append(
                    "data",
                    new Blob([JSON.stringify(data)], { type: "application/json" })
                );
                formData.append("password", password)
                axios.defaults.headers.common['Authorization'] = ``;
                axios.post(`/register/${location.pathname.split('/')[2]}`, formData)
                    .then((res) => {
                        if (res.status === 200) {
                            navigate('/');
                        }
                    }).catch((err) => {
                        setErrorMessage(err.message + ' ' + err.code)
                        if (err.response && err.response.data && !err.response.data.message) {
                            setErrorMessage(err.response.data)
                        }
                        if (err.response && err.response.data && err.response.data.message) {
                            setErrorMessage(err.response.data.message)
                        }
                        if (err.status === 413) {
                            setErrorMessage("Image is too  large");
                        }
                    });
            } else {
                const id = localStorage.getItem('id');
                axios.post(`users/changePassword/${id}`, {
                    "password": password
                }).then((res) => {
                    if (res.status === 200) {
                        navigate(-1);
                    }
                }).catch((err) => {
                    if (err.status === 401) {
                        navigate('/')
                    }
                    setErrorMessage(err.message + ' ' + err.code)
                    if (err.response && err.response.data && !err.response.data.message) {
                        setErrorMessage(err.response.data)
                    }
                    if (err.response && err.response.data && err.response.data.message) {
                        setErrorMessage(err.response.data.message)
                    }
                });
            }
        } else {
            setErrorMessage("Passwords do not match");
        }
    }

    return (
        <div className="login-div">
            <div className='login-main' style={{ flexDirection: 'column' }}>
                <h1>Enter New Password</h1>
                <md-outlined-text-field
                    type="password"
                    label="Enter Password"
                    placeholder="%S5Gghu*$"
                    class="text-fiell"
                    style={{ maxWidth: "450px" }}
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                />
                <md-outlined-text-field
                    type="password"
                    label="Re Enter Password"
                    placeholder="%S5Gghu*$"
                    class="text-fiell"
                    style={{ maxWidth: "450px" }}
                    value={passwordConfirmed}
                    onInput={(e) => setPasswordConfirmed(e.target.value)}
                />

                <p style={{ color: "red", fontSize: "16px", margin: "5px", paddingLeft: "20px" }}>{errorMessage}</p>

                <md-filled-button class="button-primary" onClick={() => handleSubmit()}>Submit</md-filled-button>

            </div>
        </div>
    );
}

export default SetPassword;