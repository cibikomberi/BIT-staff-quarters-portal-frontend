import { useLoaderData } from "react-router-dom";

const ViewCompliant = () => {
    const compliant = useLoaderData();
    console.log(compliant);
    return ( 
        <div className='main-area' style={{alignItems: "flex-start", flexWrap: "nowrap"}}>
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
     );
}

export const getCompliantById = async(id) => {    
    const res = await fetch(`http://192.168.31.16:8050/compliant/${id}`)
    return res.json();
}
export default ViewCompliant;