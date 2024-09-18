import { Link, useLoaderData, useLocation } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

const Guest = () => {

    let guests = useLoaderData();
    const location = useLocation();
    const isUser = location.pathname.split('/')[1] === "user";
    const id = localStorage.getItem('id');
    const [errorText, setErrorText] = useState('');
    const [activeName, setActiveName] = useState('');
    const [activeId, setActiveId] = useState('');

    const handleCheckout = () => {
        axios.post(`/guests/checkout/${id}`, {
            'guestId': activeId
        }).then(() => {
            window.location.reload();
        }).catch((err) => {
            console.log(err);

            setErrorText(err.message + ' ' + err.code);
            document.getElementById('checkout-error').show();
        })
    }
    return (
        <>
            <table className='user-list'>
                <thead>
                    <tr>
                        <th>S. NO</th>
                        <th>Guest Name</th>
                        <th>Staying From</th>
                        <th>Stay Upto</th>
                        <th>Faculty</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {guests.map((e, i) => {
                        return (
                            <tr key={e.id}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.fromDate}</td>
                                <td>{e.toDate}</td>
                                <td>{e.faculty.name}</td>
                                <td>{e.place}</td>
                                {isUser && <td>
                                    <md-icon-button onClick={() => {
                                        setActiveId(e.id);
                                        setActiveName(e.name);
                                        document.getElementById('checkout-dialog').show();
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h-80v-80H200v560h560v-80h80v80q0 33-23.5 56.5T760-120H200Zm480-160-56-56 103-104H360v-80h367L624-624l56-56 200 200-200 200Z" /></svg>
                                    </md-icon-button>
                                </td>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {isUser && <Link to="new">
                <md-fab class="fab">
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></md-icon>
                </md-fab>
            </Link>
            }
            {isUser && <md-dialog id="checkout-dialog">
                <div slot="headline" style={{ fontWeight: "bold" }}>
                    Confirm Checkout
                </div>
                <div slot="content">
                    Do you want to checkout {activeName}?
                </div>
                <div slot="actions">
                    <md-text-button onClick={() => {
                        document.getElementById('checkout-dialog').close();
                    }}>Cancel</md-text-button>
                    <md-filled-button onClick={() => {
                        document.getElementById('checkout-dialog').close();
                        handleCheckout();
                    }}>OK</md-filled-button>
                </div>
            </md-dialog>}
            {isUser && <md-dialog id="checkout-error">
                <div slot="headline" style={{ fontWeight: "bold" }}>
                    Error Checkingout...
                </div>
                <div slot="content">
                    {errorText}
                </div>
                <div slot="actions">
                    <md-filled-button onClick={() => {
                        document.getElementById('checkout-error').close();
                        handleCheckout();
                    }}>OK</md-filled-button>
                </div>
            </md-dialog>}
        </>
    );
}

export const guestLoaderUser = async () => {
    const id = localStorage.getItem('id')

    const res = await axios.get(`/guests/${id}`)
    return res.data;
}

export const guestLoaderAdmin = async () => {
    const res = await axios.get(`/guests`)
    return res.data;
}

export default Guest;