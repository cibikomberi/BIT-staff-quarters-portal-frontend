import { useLoaderData, Link } from "react-router-dom";
import axios from 'axios'

const ViewCompliant = () => {
    const compliant = useLoaderData();
    console.log(compliant);
    return (<>
        <div className='main-area' style={{ alignItems: "flex-start", flexWrap: "nowrap" }}>
            <p className="key-text">Compliant Id</p>
            <p className="value-text">{compliant.compliantId}</p>
            <p className="key-text">Category</p>
            <p className="value-text">{compliant.category}</p>
            <p className="key-text">Compliant Status</p>
            <p className="value-text">{compliant.status}</p>
            <p className="key-text">Compliant Title</p>
            <p className="value-text">{compliant.title}</p>
            <p className="key-text">Description</p>
            <p className="value-text">{compliant.description}</p>
            <p className="key-text">Issued By</p>
            <p className="value-text">{compliant.issuedBy}</p>
            <p className="key-text">Assigned To</p>
            <p className="value-text">{compliant.assignedTo}</p>
        </div>
        <div className="user-table" style={{ display: "inline-block" }}>
            <Link to={`tel:`}><abbr title="Phone"><md-filled-button style={{ margin: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg></md-filled-button></abbr></Link>
            <abbr title="Edit Compliant"><md-filled-button style={{ margin: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" /></svg></md-filled-button></abbr>
        </div>
        <abbr title="Mark as Completed"><md-filled-button class="button-primary" style={{ margin: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" /></svg></md-filled-button></abbr>

    </>
    );
}

export const getCompliantById = async (id) => {
    const res = await axios.get(`/compliant/${id}`)
    return res.data;

}
export default ViewCompliant;