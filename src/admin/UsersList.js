import './style/user-list.css'
import axios from '../api/axios';

import { useLoaderData, useNavigate } from 'react-router-dom';

const UsersList = () => {

    let data = useLoaderData();
    console.log(data);
    
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
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Designation</th>
                    <th>Quarters No.</th>
                </tr>
                </thead>
                <tbody>
                {data.map((e,i)=>{
                    return(
                    <tr key={e.id} onClick={() => viewUser(e.id)}>
                        <td>{i+1}</td>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.roles}</td>
                        <td>{e.details && e.details.designation}</td>
                        <td>{e.details && e.details.quartersNo}</td>
                    </tr>
                )})}
                </tbody>
            </table>
        </div>
     );
}
 

export const usersListLoader = async() => {
    const token = localStorage.getItem('token');


      const res = await axios.get('/users', {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        }
      })
    return res.data;
}

export default UsersList;