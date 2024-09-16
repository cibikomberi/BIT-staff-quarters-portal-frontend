import './style/user-list.css'
import axios from 'axios'
import { useState } from 'react';

import { useLoaderData, useNavigate } from 'react-router-dom';

const UsersList = () => {

    let loaderData = useLoaderData();
    const [data, setData] = useState(loaderData);

    const navigate = useNavigate();
    const viewUser = (id) => {
        console.log("clicked " + id);
        navigate(`${id}/view`)
    }
    const searchUser = async(keyword) => {
        axios.get(`/users/search?keyword=${keyword}`)
            .then((res) => setData(res.data))
    }

    return (
        <div className='main-area' style={{ flexDirection: 'row', alignItems: "flex-end" }}>
            <input className="search-field" placeholder="Search here" onChange={(e) => searchUser(e.target.value)}/>

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
                    {data.map((e, i) => {
                        return (
                            <tr key={e.id} onClick={() => viewUser(e.id)}>
                                <td>{i + 1}</td>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.roles}</td>
                                <td>{e.designation}</td>
                                <td>{e.quartersNo}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}


export const usersListLoader = async () => {
    const res = await axios.get('/users')
    return res.data;
}

export default UsersList;