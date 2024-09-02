import { Link, useLoaderData } from 'react-router-dom';

const Guest = () => {

    let compliants = useLoaderData();
    console.log(compliants);
    
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
                {compliants.map((e,i)=>{
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
    const res = await fetch('http://localhost:8080/guests')
    return res.json();
}

export default Guest;