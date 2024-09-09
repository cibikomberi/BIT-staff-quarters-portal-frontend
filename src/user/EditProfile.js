import logo from "../images/1407443626926816.jpeg";
import axios from '../api/axios'
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProfile = () => {
    const data = useLoaderData();
    console.log(data);
    
    const navigate = useNavigate();
    const handleEditProfile = async () => {
        document.getElementById('edit-profile-btn').disabled = true
        const token = localStorage.getItem('token');

        let name = document.getElementById('name').value
        let username = document.getElementById('username').value
        let aadhar = document.getElementById('aadhar').value
        let address = document.getElementById('address').value
        let department = document.getElementById('department').value
        let designation = document.getElementById('designation').value
        let email = document.getElementById('email').value
        let phone = document.getElementById('phone').value
        let quartersNo = document.getElementById('quartersNo').value

        await axios.put(`/update`, {
            "id": data.id,
            "name": name,
            "username": username,
            "details": {
                "aadhar": aadhar,
                "address": address,
                "department": department,
                "designation": designation,
                "email": email,
                "id": data.details.id,
                "phone": phone,
                "quartersNo": quartersNo,
            }
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res => {
            if (res.status === 200) {
                navigate(-1);
            }
        })).catch(() => {
            document.getElementById('edit-profile-btn').disabled = false;
        })
    }
    return (
        <div className="main-area fl" style={{ flexDirection: "row", padding: 0 }}>
            <div>
                <img src={logo} alt="profile pic" style={{ width: "500px", borderRadius: "50%", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)" }} />
                <md-filled-icon-button style={{ transform: "translateX(-100px)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-160v-326L336-382l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-600v-120q0-33 23.5-56.5T240-800h480q33 0 56.5 23.5T800-720v120h-80v-120H240v120h-80Z" /></svg>
                </md-filled-icon-button></div>
            <div className="fl" style={{ flexDirection: "column", width: "360px" }}>
                <md-outlined-text-field class="input-field" id='name' label="Name" value={data.name}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='username' label="Username" value={data.username}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='department' label="Department" value={data.details.department}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='designation' label="Designation" value={data.details.designation}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='fid' label="Faculty Id" value={data.details.id}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='address' label="City" value={data.details.address}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='phone' label="Phone" value={data.details.phone}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='email' label="Email" value={data.details.email}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='quartersNo' label="Quarters No" value={data.details.quartersNo}></md-outlined-text-field>
                <md-outlined-text-field class="input-field" id='aadhar' label="Aadhar" value={data.details.aadhar}></md-outlined-text-field>
                <md-filled-button class="button-primary" id="edit-profile-btn" onClick={() => handleEditProfile()}>Save</md-filled-button>
            </div>
        </div>);
}

export default EditProfile;