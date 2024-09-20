import axios from 'axios'
import defaultProfileImage from '../images/default.jpg'
import { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isNewUser = (location.pathname.split('/')[1] === 'register')

    const loaderData = useLoaderData();

    const [data, setData] = useState(loaderData);
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    console.log(data);

    useEffect(() => {
        axios.get(
            `/users/image/${data.id}`,
            { responseType: "blob" }
        ).then((res) => {
            let img = URL.createObjectURL(res.data)
            setImageURL(img);
            setImage(img)
        }).catch(() => {
            setImageURL(defaultProfileImage);
            setImage(defaultProfileImage)
        });
    }, [data.id]);

    const handleClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append(
            "data",
            new Blob([JSON.stringify(data)], { type: "application/json" })
        );

        axios.put(`/update/${data.roles.toString().toLowerCase()}/${data.id}`, formData).then((res => {
            if (res.status === 200) {
                navigate(-1);
            }
        })).catch((err) => {
            setErrorMessage(err.message + ' ' + err.code)
            if (err.response && err.response.data) {
                setErrorMessage(err.response.data)
            }
            if (err.status === 413) {
                setErrorMessage("Image is too  large")
            }
        })

    }

    const setValues = (field, value) => {
        let val = data;
        val[field] = value;
        setData(val);
    }
    return (
        <div className="main-area fl" style={{ flexDirection: "row", padding: 0, minHeight: "100%" }}>
            <div>
                <img src={imageURL} alt="profile pic" style={{ width: "500px", height: "500px", objectFit: "cover", borderRadius: "50%", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)" }} />

                <input style={{ display: "none" }} type="file" id="fileInput" onChange={(e) => setImage(e.target.files[0])} />
                <md-filled-icon-button style={{ transform: "translateX(-100px)" }} onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-160v-326L336-382l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-600v-120q0-33 23.5-56.5T240-800h480q33 0 56.5 23.5T800-720v120h-80v-120H240v120h-80Z" /></svg>
                </md-filled-icon-button>
            </div>

            <div className="fl" style={{ flexDirection: "column", width: "360px" }}>
                {"name" in data && <md-outlined-text-field
                    class="input-field"
                    label="Name"
                    value={data.name}
                    onInput={(e) => setValues('name', e.target.value)}>

                </md-outlined-text-field>}
                {"username" in data && <md-outlined-text-field
                    class="input-field"
                    label="Username"
                    value={data.username}
                    onInput={(e) => setValues('username', e.target.value)}>

                </md-outlined-text-field>}
                {"department" in data && <md-outlined-text-field
                    class="input-field"
                    label="Department"
                    value={data.department}
                    onInput={(e) => setValues('department', e.target.value)}>

                </md-outlined-text-field>}
                {"designation" in data && <md-outlined-text-field
                    class="input-field"
                    label="Designation"
                    value={data.designation}
                    onInput={(e) => setValues('designation', e.target.value)}>

                </md-outlined-text-field>}
                {"facultyId" in data && <md-outlined-text-field
                    class="input-field"
                    label="Faculty Id"
                    value={data.facultyId}
                    onInput={(e) => setValues('facultyId', e.target.value)}>

                </md-outlined-text-field>}
                {"address" in data && <md-outlined-text-field
                    class="input-field"
                    label="City"
                    value={data.address}
                    onInput={(e) => setValues('address', e.target.value)}>

                </md-outlined-text-field>}
                {"phone" in data && <md-outlined-text-field
                    class="input-field"
                    label="Phone"
                    value={data.phone}
                    onInput={(e) => setValues('phone', e.target.value)}>

                </md-outlined-text-field>}
                {"email" in data && <md-outlined-text-field
                    class="input-field"
                    label="Email"
                    value={data.email}
                    onInput={(e) => setValues('email', e.target.value)}>

                </md-outlined-text-field>}
                {"quartersNo" in data && <md-outlined-text-field
                    class="input-field"
                    label="Quarters No"
                    value={data.quartersNo}
                    onInput={(e) => setValues('quartersNo', e.target.value)}>

                </md-outlined-text-field>}
                {"aadhar" in data && <md-outlined-text-field
                    class="input-field"
                    label="Aadhar"
                    value={data.aadhar}
                    onInput={(e) => setValues('aadhar', e.target.value)}>

                </md-outlined-text-field>}

                {"category" in data && <md-outlined-select
                    label="Category"
                    class="input-field"
                    value={data.category}
                    onInput={(e) => setValues('category', e.target.value)}
                >
                    <md-select-option value="Plumbing">
                        <div slot="headline">Plumbing</div>
                    </md-select-option>
                    <md-select-option value="Electrical">
                        <div slot="headline">Electrical</div>
                    </md-select-option>
                    <md-select-option value="Carpentering">
                        <div slot="headline">Carpentering</div>
                    </md-select-option>
                    <md-select-option value="Gardening">
                        <div slot="headline">Gardening</div>
                    </md-select-option>
                    <md-select-option value="Others">
                        <div slot="headline">Others</div>
                    </md-select-option>
                </md-outlined-select>}

                <p style={{ color: "red", fontSize: "16px", margin: "5px", paddingLeft: "20px" }}>{errorMessage}</p>

                {!isNewUser && <md-filled-button class="button-primary" id="edit-profile-btn" onClick={() => handleSubmit()}>Save</md-filled-button>}
                {isNewUser &&
                    <Link to={'setPassword'} state={{ 'data': data, 'image': image }}>
                        <md-filled-button class="button-primary" id="edit-profile-btn">Next</md-filled-button>
                    </Link>}
            </div>
        </div>);
}

export const newDetailsLoaderUser = () => {
    return {
        "id": 0,
        "username": "",
        "name": "",
        "designation": "",
        "email": "",
        "phone": "",
        "roles": "USER",
        "facultyId": "",
        "department": "",
        "quartersNo": "",
        "address": "",
        "aadhar": ""
    }
}

export const newDetailsLoaderHandler = () => {
    return {
        "id": 0,
        "username": '',
        "name": "",
        "designation": "",
        "email": "",
        "phone": "",
        "roles": "HANDLER",
        "address": "",
        "aadhar": "",
        "category": ""

    }
}
export default EditProfile;