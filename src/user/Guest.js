import { Link, useLoaderData } from 'react-router-dom';
import axios from '../api/axios'

const Guest = () => {

    let guests = useLoaderData();
    
    return ( 
        <>
        <table className='user-list'>
                <thead>
                <tr>
                    <th>S. NO</th>
                    <th>Guest Name</th>
                    <th>Staying From</th>
                    <th>Stay Upto</th>
                    <th>Place</th>
                </tr>
                </thead>
                <tbody>
                {guests.map((e,i)=>{
                    return(
                    <tr key={e.id}>
                        <td>{i + 1}</td>
                        <td>{e.name}</td>
                        <td>{e.fromDate}</td>
                        <td>{e.toDate}</td>
                        <td>{e.place}</td>
                    </tr>
                )})}
                </tbody>
            </table>
            <Link to="new">
                <md-fab class="fab">
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></md-icon>
                </md-fab>
            </Link>
        </>
     );
}
 
export const guestLoader = async() => {
    const token = localStorage.getItem('token');
    const res = await axios.get(`/guests`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data;
}

export default Guest;