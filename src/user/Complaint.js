import './style/compliants.css'
import axios from '../api/axios';
import { Link, useLoaderData, useLocation, useNavigate, redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Complaints = () => {

    const location = useLocation();

    // setCompliants(useLoaderData())
    const com = useLoaderData()
    const [compliants,setCompliants] = useState(com);

    const isAdmin = location.pathname.split('/')[1] === "admin";

    const navigate = useNavigate();
    function viewCompliant(id) {
        navigate(`${id}/view`)
    }

    const [received,setReceived] = useState(0);
    const [pending,setPending] = useState(0);
    const [closed,setClosed] = useState(0);
    useEffect(() => {
        if (isAdmin) {
            const token = localStorage.getItem('token');
            axios.get('/compliants/count', {
                headers: {
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setReceived(res.data.issued)
                setPending(res.data.pending)
                setClosed(res.data.resolved)
            })
        }
    })

    const searchCompliant = (e) => {
        const token = localStorage.getItem('token');
        console.log(e.target.value);
        axios.get(`/compliants/search?param=${e.target.value}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setCompliants(res.data)
        })
        
    }
    return (
        <>
            {isAdmin && <div className='compliant-summary'>
                <div>
                    <p className="key-text">Compliants Received</p>
                    <p className="value-text">{received}</p>
                </div>
                <div>
                    <p className="key-text">Compliants Pending</p>
                    <p className="value-text">{pending}</p>
                </div>
                <div>
                    <p className="key-text">Compliants Closed</p>
                    <p className="value-text">{closed}</p>
                </div>
                <input className="search-field" placeholder="Search here" onChange={searchCompliant}/>
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