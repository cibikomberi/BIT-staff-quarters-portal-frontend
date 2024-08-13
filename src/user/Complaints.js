import './style/compliants.css'

import { Link, useNavigate } from 'react-router-dom';


const Complaints = () => {

    let compliants = [
        {id:101,category:"Plumbing",title:"Water Leakage",qNo:"510",description:"Water leaking from taps"}
        ,{id:102,category:"Plumbing",title:"Water Leakage",qNo:"510",description:"Water leaking from taps"}
        ,{id:103,category:"Plumbing",title:"Water Leakage",qNo:"510",description:"Water leaking from taps"}
        ,{id:104,category:"Plumbing",title:"Water Leakage",qNo:"510",description:"Water leaking from taps"}

    ]
    const navigate = useNavigate();
    function viewUser(id){
        navigate(`${id}/view`)
    }
    return ( 
    <>
        <table className='user-list'>
                <thead>
                <tr>
                    <th>S. NO</th>
                    <th>Compliant Id</th>
                    <th>Category</th>
                    <th>Compliant Title</th>
                    <th>Quarters No.</th>
                </tr>
                </thead>
                <tbody>
                {compliants.map((e,i)=>{
                    return(
                    <tr key={e.id} onClick={() => viewUser(e.id)}>
                        <td>{i + 1}</td>
                        <td>{e.id}</td>
                        <td>{e.category}</td>
                        <td>{e.title}</td>
                        <td>{e.qNo}</td>
                    </tr>
                )})}
                </tbody>
            </table>
        <Link to="new">
                <md-fab class="fab">
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></md-icon>
                </md-fab>
            </Link>
    </> );
}
 
export default Complaints;