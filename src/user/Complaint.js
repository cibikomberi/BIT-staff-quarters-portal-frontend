import './style/compliants.css'
import axios from '../api/axios';
import { Link, useLoaderData, useLocation, useNavigate, redirect } from 'react-router-dom';


const Complaints = () => {

    const location = useLocation();

    const compliants = useLoaderData();
    console.log(compliants);


    const isAdmin = location.pathname.split('/')[1] === "admin";

    const navigate = useNavigate();
    function viewCompliant(id) {
        navigate(`${id}/view`)
    }
    return (
        <>
            {isAdmin && <div className='compliant-summary'>
                <div>
                    <p className="key-text">Compliants Received</p>
                    <p className="value-text">a</p>
                </div>
                <div>
                    <p className="key-text">Compliants Pending</p>
                    <p className="value-text">a</p>
                </div>
                <div>
                    <p className="key-text">Compliants Closed</p>
                    <p className="value-text">a</p>
                </div>
            </div>}
            <table className='user-list'>
                <thead>
                    <tr>
                        <th>Compliant Id</th>
                        <th>Category</th>
                        <th>Compliant Title</th>
                        {isAdmin && <th>Raised By</th>}
                        <th>Raised On</th>
                        <th>Assigned To</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {compliants.map((e, i) => {
                        return (
                            <tr key={e.compliantId} onClick={() => viewCompliant(e.compliantId)}>
                                <td>{e.compliantId}</td>
                                <td>{e.category}</td>
                                <td>{e.title}</td>
                                {isAdmin && <td>{e.issuedBy}</td>}
                                <td>{e.issuedOn.split('T')[0]}</td>
                                <td>{e.assignedTo}</td>
                                <td>{e.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="new">
                <md-fab class="fab">
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></md-icon>
                </md-fab>
            </Link>
        </>);
}

export const compliantsLoaderUser = async () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    console.log(token);
    try {
        const res = await axios.get(`/compliants/${username}`, {
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
export const compliantsLoaderAdmin = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    try {
        const res = await axios.get(`/compliants`, {
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

export default Complaints;