import { useParams } from "react-router-dom";

const ViewCompliant = () => {

    const {id} = useParams();
    let compliants ={id:101,category:"Plumbing",title:"Water Leakage",qNo:"510",description:"Water leaking from taps",status:"ongoing"}
    return ( 
        <div className='main-area' style={{alignItems: "flex-start", flexWrap: "nowrap"}}>
            <p className="key-text">Compliant Id</p>
            <p className="value-text">{id}</p>
            <p className="key-text">Compliant Status</p>
            <p className="value-text">{compliants.status}</p>
            <p className="key-text">Category</p>
            <p className="value-text">{compliants.category}</p>
            <p className="key-text">Compliant Title</p>
            <p className="value-text">{compliants.title}</p>
            <p className="key-text">Description</p>
            <p className="value-text">{compliants.description}</p>
        </div>
     );
}
 
export default ViewCompliant;