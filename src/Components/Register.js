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
export const newDetailsLoaderUser = () => {
    return {
            "id": 1,
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
            "id": 1,
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
export default Register;