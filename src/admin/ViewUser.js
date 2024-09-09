import logo from "../images/1407443626926816.jpeg";
import axios from "axios";
import { Link, useLoaderData, redirect } from "react-router-dom";
import './style/view-user.css'
const ViewUser = () => {
    const data = useLoaderData();
    console.log(data);
    if (document.getElementById("profile-dialog")) {
        document.getElementById("profile-dialog").close();
    }

    return (
        <div className="main-area fl" style={{ height: "100%", flexDirection: "row", padding: 0 }}>
            <img src={logo} alt="profile pic" className="img-view" />
            <div>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th className="key-text">Name</th>
                            <td className="value-text">{data.name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="key-text">Faculty ID</th>
                            <td className="value-text">{data.id}</td>
                        </tr>
                        {data.details && <tr>
                            <th className="key-text">Quarters No</th>
                            <td className="value-text">{data.details.quartersNo}</td>
                        </tr>}
                        {data.details && <tr>
                            <th className="key-text">Designation</th>
                            <td className="value-text">{data.details.designation}</td>
                        </tr>}
                    </tbody>

                </table>
                {data.details && <Link to={`tel:${data.details.phone}`}><abbr title="Phone"><md-filled-button style={{ margin: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg></md-filled-button></abbr></Link>}
                {data.details && <Link to={`mailto:${data.details.email}`}><abbr title="E-Mail"><md-filled-button style={{ margin: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg></md-filled-button></abbr></Link>}
                <Link to="tel:+917010047763"><abbr title="Complaints"><md-filled-button style={{ margin: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z" /></svg></md-filled-button></abbr></Link>
                <Link to="../edit"><abbr title="Edit User"><md-filled-button style={{ margin: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></md-filled-button></abbr></Link>

            </div>
        </div>
    );
}
export const myDetailsLoader = async() => {
    const token = localStorage.getItem('token');
     
    try {
        const res = await axios.get(`/whoami`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(res);
        return res.data;
    } catch (err) {
        if (err.status === 401) {
            return redirect(`/`);
        }
        throw new Error(err)
    }
}

export const userDetailLoader = async(id) => {
    const token = localStorage.getItem('token');
     console.log(id);
     
    try {
        const res = await axios.get(`/whoisthis/${id}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(res);
        return res.data;
    } catch (err) {
        if (err.status === 401) {
            return redirect(`/`);
        }
        throw new Error(err)
    }
}

export default ViewUser;