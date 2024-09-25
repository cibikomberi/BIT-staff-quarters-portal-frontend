import axios from 'axios'
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Complaints = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const isAdmin = location.pathname.split('/')[1] === "admin";
    const isUser = location.pathname.split('/')[1] === "user";
    const isHandler = location.pathname.split('/')[1] === "handler";

    const { complaints, count } = useLoaderData()
    const [compliants, setCompliants] = useState(complaints);
    console.log(compliants);

    const issued = count.issued;
    const pending = count.pending;
    const resolved = count.resolved;

    function viewCompliant(id) {
        navigate(`${id}/view`)
    }

    const searchCompliant = (e) => {
        if (isAdmin) {
            axios.get(`/compliants/search?keyword=${e.target.value}`)
                .then((res) => {
                    setCompliants(res.data)
                })
        }
        if (isHandler) {
            const id = localStorage.getItem('id');
            axios.get(`/compliants/handler/${id}/search?keyword=${e.target.value}`)
                .then((res) => {
                    setCompliants(res.data)
                })
        }
    }
    return (
        <>
            {(isAdmin || isHandler) && <div className='compliant-summary'>
                <div>
                    <p className="key-text">Compliants Received</p>
                    <p className="value-text">{issued}</p>
                </div>
                <div>
                    <p className="key-text">Compliants Pending</p>
                    <p className="value-text">{pending}</p>
                </div>
                <div>
                    <p className="key-text">Compliants Closed</p>
                    <p className="value-text">{resolved}</p>
                </div>
                <input className="search-field" placeholder="Search here" onChange={searchCompliant} />
            </div>}
            <table className='user-list'>
                <thead>
                    <tr>
                        <th>Compliant Id</th>
                        <th>Category</th>
                        <th>Compliant Title</th>
                        <th>Status</th>
                        {isAdmin && <th>Raised By</th>}
                        <th>Raised On</th>
                        <th>Assigned To</th>
                    </tr>
                </thead>
                <tbody>
                    {compliants.map((e, i) => {
                        return (
                            <tr key={e.id} onClick={() => viewCompliant(e.id)}>
                                <td>{e.id}</td>
                                <td>{e.category}</td>
                                <td>{e.title}</td>
                                <td>{e.status}</td>
                                {isAdmin && <td>{e.issuedBy.name}</td>}
                                <td>{e.issuedOn.split('T')[0]}</td>
                                <td>{e.assignedTo.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {isUser && <Link to="new">
                <md-fab class="fab">
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></md-icon>
                </md-fab>
            </Link>}
        </>);
}

export const compliantsLoaderUser = async () => {
    const id = localStorage.getItem('id');

    const complaints = await axios.get(`/compliants/user/${id}`) // TODO
        .then((res) => res.data)

    const count = { issued: 0, pending: 0, resolved: 0 }
    return { complaints, count }

}
export const compliantsLoaderAdmin = async () => {

    const complaints = await axios.get(`/compliants`)
        .then((res) => res.data)

    const count = await axios.get('/compliants/count')
        .then((res) => res.data)

    return { complaints, count }
}

export const compliantsLoaderHandler = async () => {
    const id = localStorage.getItem('id');

    const complaints = await axios.get(`/compliants/handler/${id}`)
        .then((res) => res.data)

    const count = await axios.get(`/compliants/handler/count/${id}`)
        .then((res) => res.data)

    return { complaints, count }
}

export default Complaints;