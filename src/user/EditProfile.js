import logo from "../images/1407443626926816.jpeg";
import axios from 'axios'
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProfile = () => {
    const data = useLoaderData();
    console.log(data);

    const navigate = useNavigate();

    const [name, setName] = useState(data.name);
    const [username, setUsername] = useState(data.username);
    const [facltyId, setfacltyId] = useState(data.details.id);
    const [aadhar, setAadhar] = useState(data.details.aadhar);
    const [address, setAddress] = useState(data.details.address);
    const [department, setDepartment] = useState(data.details.department);
    const [designation, setDesignation] = useState(data.details.designation);
    const [email, setEmail] = useState(data.details.email);
    const [phone, setPhone] = useState(data.details.phone);
    const [quartersNo, setQuartersNo] = useState(data.details.quartersNo);

    const handleEditProfile = async () => {
        document.getElementById('edit-profile-btn').disabled = true

        axios.put(`/update`, {
            "id": data.id,
            "name": name,
            "username": username,
            "details": {
                "aadhar": aadhar,
                "address": address,
                "department": department,
                "designation": designation,
                "email": email,
                "id": facltyId,
                "phone": phone,
                "quartersNo": quartersNo,
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
                <md-outlined-text-field
                    class="input-field"
                    label="Name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="Username" 
                    value={username}
                    onInput={(e) => setUsername(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="Department"
                    value={department}
                    onInput={(e) => setDepartment(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="Designation"
                    value={designation}
                    onInput={(e) => setDesignation(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="Faculty Id"
                    value={facltyId}
                    onInput={(e) => setfacltyId(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="City" 
                    value={address}
                    onInput={(e) => setAddress(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="Phone"
                    value={phone}
                    onInput={(e) => setPhone(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="Email"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="Quarters No"
                    value={quartersNo}
                    onInput={(e) => setQuartersNo(e.target.value)}>

                </md-outlined-text-field>
                <md-outlined-text-field
                    class="input-field"
                    label="Aadhar"
                    value={aadhar}
                    onInput={(e) => setAadhar(e.target.value)}>

                </md-outlined-text-field>
                <md-filled-button class="button-primary" id="edit-profile-btn" onClick={() => handleEditProfile()}>Save</md-filled-button>
            </div>
        </div>);
}

export default EditProfile;