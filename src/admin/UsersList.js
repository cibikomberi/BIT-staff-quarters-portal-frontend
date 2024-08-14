import './style/user-list.css'

import { useNavigate } from 'react-router-dom';

const UsersList = () => {

    let innmatesList = [
        {name:"CIBI VISHNU A C" , qNo:"Father",id:1,facultyId:5,desig:"Professor"}
        ,{name:"CIBI VISHNU A C" , qNo:"Father",id:2,facultyId:5,desig:"Professor"}
        ,{name:"CIBI VISHNU A C" , qNo:"Father",id:3,facultyId:5,desig:"Professor"}
        ,{name:"CIBI VISHNU A C" , qNo:"Father",id:4,facultyId:5,desig:"Professor"}
    ]
    const navigate = useNavigate();
    function viewUser(id){
        console.log("clicked "+id);
        navigate(`${id}/view`)
    }

    return ( 
        <div className='main-area' style={{flexDirection:'row',alignItems: "flex-end"}}>
            <input className="search-field" placeholder="Search here" />

            <table className='user-list'>
                <thead>
                <tr>
                    <th>S. NO</th>
                    <th>Name</th>
                    <th>Faculty Id</th>
                    <th>Designation</th>
                    <th>Quarters No.</th>
                </tr>
                </thead>
                <tbody>
                {innmatesList.map((e)=>{
                    return(
                    <tr key={e.id} onClick={() => viewUser(e.id)}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.facultyId}</td>
                        <td>{e.desig}</td>
                        <td>{e.qNo}</td>
                    </tr>
                )})}
                </tbody>
            </table>
        </div>
     );
}
 
export default UsersList;