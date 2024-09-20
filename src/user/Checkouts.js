import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const Checkouts = () => {
    const loaderData = useLoaderData();
    const location = useLocation();

    const isAdmin = location.pathname.split('/')[1] === 'admin';
    const isUser = location.pathname.split('/')[1] === 'user';

    const [checkouts, setCheckouts] = useState(loaderData);
    const searchCheckout = (keyword) => {
        axios.get(`/checkouts/search?keyword=${keyword}`)
            .then((res) => setCheckouts(res.data))
    }
    return (
        <>
            {isAdmin && <input 
                className="search-field" 
                placeholder="Search here" 
                onChange={(e) => searchCheckout(e.target.value)} 
            />}

            <table className='user-list'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        {isUser && <th>Pin</th>}
                        <th>Faculty</th>
                        <th>Quarters No</th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map((e, i) => {
                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.type}</td>
                                {isUser && <td>{e.pin}</td>}
                                {isUser && <td>{e.faculty.name}</td>}
                                {isAdmin && <td><Link to={`../users/${e.faculty.id}/view`}>{e.faculty.name}</Link></td>}
                                <td>{e.faculty.quartersNo}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}


export const getAllCheckouts = () => {
    const data = axios.get(`/checkouts`)
        .then((res) => res.data);

    return data;
}

export const getAllCheckoutsByUser = () => {
    const id = localStorage.getItem('id');
    const data = axios.get(`/checkouts/${id}`)
        .then((res) => res.data);

    return data;
}
export default Checkouts;