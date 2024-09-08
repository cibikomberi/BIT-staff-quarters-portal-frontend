import EditProfile from "../user/EditProfile";

const Register = () => {
    return ( 
        <>
            <div>
                <EditProfile />
            </div>
        </>
     );
}
export const newDetailsLoader = () => {
    return {
        "id": null,
        "username": null,
        "name": null,
        "details": {
            "id": null,
            "name": null,
            "department": null,
            "email": null,
            "phone": null,
            "designation": null,
            "quartersNo": null,
            "address": null,
            "aadhar": null
        },
        "password": null,
        "roles": "USER"
    }
}
export default Register;