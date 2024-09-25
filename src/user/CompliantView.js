import { useLoaderData, Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

const ViewCompliant = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const compliant = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();

    const isAdmin = location.pathname.split('/')[1] === 'admin';
    const isHandler = location.pathname.split('/')[1] === 'handler';

    const handleStatusChange = (status) => {
        axios.post(`/compliants/${compliant.id}/updateStatus`, {
            'status': status
        }).then((res) => {
            if (res.status === 200) {
                window.location.reload(false);
            }
        }).catch((err) => {
            if (err.status === 401) {
                navigate('/')
            }
            setErrorMessage(err.message + ' ' + err.code)
            if (err.response && err.response.data && !err.response.data.message) {
                setErrorMessage(err.response.data)
            }
            if (err.response && err.response.data && err.response.data.message) {
                setErrorMessage(err.response.data.message)
            }
        });
    }
    return (<>
        <div className='main-area' style={{ alignItems: "flex-start", flexWrap: "nowrap" }}>
            <div className='summary'>
                <div>
                    <p className="key-text">Compliant Id</p>
                    <p className="value-text">{compliant.id}</p>
                </div>
                <div>
                    <p className="key-text">Category</p>
                    <p className="value-text">{compliant.category}</p>
                </div>
            </div>
            <div className='summary'>
                <div>
                    <p className="key-text">Compliant Status</p>
                    <p className="value-text">{compliant.status}</p>
                </div>
            </div>
            <div className='summary'>
                <div>
                    <p className="key-text">Compliant Title</p>
                    <p className="value-text">{compliant.title}</p>
                </div>
            </div>
            <div className='summary' style={{ flexDirection: "column" }}>
                <div>
                    <p className="key-text">Description</p>
                    <p className="value-text">{compliant.description}</p>
                </div>
                <br />
                <br />
                <div>
                    <p className="key-text" style={{ fontSize: "17px" }}>Faculty available time</p>
                    <p className="value-text" style={{ fontSize: "30px" }}>{compliant.availableTime}</p>
                </div>
            </div>
            <div className='summary'>
                <div>
                    <p className="key-text">Raised On</p>
                    <p className="value-text">{compliant.issuedOn.split('T')[0]}</p>
                </div>
                {compliant.resolvedOn && <div>
                    <p className="key-text">Resolved On</p>
                    <p className="value-text">{compliant.resolvedOn.split('T')[0]}</p>
                </div>}
            </div>

            <div className='summary'>
                <div>
                    <p className="key-text">Issued By </p>
                    <p className="value">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="40px" fill="#555555"><path d="M528-432h216v-72H528v72Zm0-120h216v-72H528v72ZM192-336h288v-45q0-29-44-52t-100.5-23q-56.5 0-100 22.5T192-381v45Zm144.21-144Q366-480 387-501.21t21-51Q408-582 386.79-603t-51-21Q306-624 285-602.79t-21 51Q264-522 285.21-501t51 21ZM168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-432H168v432Zm0 0v-432 432Z" /></svg>
                        {compliant.issuedBy.name}</p>
                    <p className="value">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="40px" fill="#555555"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" /></svg>
                        <abbr title="Quarters No.">{compliant.issuedBy.quartersNo}</abbr></p>
                    <p className="value">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="40px" fill="#555555"><path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z" /></svg>
                        <abbr title="Phone"><Link to={`tel:${compliant.issuedBy.phone}`}>{compliant.issuedBy.phone}</Link></abbr>
                    </p>
                    <p className="value">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="40px" fill="#555555"><path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" /></svg>
                        <abbr title="Email"><Link to={`mailto:${compliant.issuedBy.email}`}>{compliant.issuedBy.email}</Link></abbr>
                    </p>
                </div>
            </div>
            <div className='summary'>
                <div>
                    <p className="key-text">Assigned To</p>
                    <p className="value">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="40px" fill="#555555"><path d="M528-432h216v-72H528v72Zm0-120h216v-72H528v72ZM192-336h288v-45q0-29-44-52t-100.5-23q-56.5 0-100 22.5T192-381v45Zm144.21-144Q366-480 387-501.21t21-51Q408-582 386.79-603t-51-21Q306-624 285-602.79t-21 51Q264-522 285.21-501t51 21ZM168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-432H168v432Zm0 0v-432 432Z" /></svg>
                        {compliant.assignedTo.name}</p>
                    <p className="value">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="40px" fill="#555555"><path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z" /></svg>
                        <abbr title="Phone"><Link to={`tel:${compliant.assignedTo.phone}`}>{compliant.assignedTo.phone}</Link></abbr>
                    </p>
                    <p className="value">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="40px" fill="#555555"><path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" /></svg>
                        <abbr title="Email"><Link to={`mailto:${compliant.assignedTo.email}`}>{compliant.assignedTo.email}</Link></abbr>
                    </p>
                </div>
            </div>
            <p style={{ color: "red" }}>{errorMessage}</p>
        </div>

        {(isAdmin || isHandler) && <div style={{ marginLeft: "50px" }}>
            {compliant.status === 'Initiated' && <div>
                <abbr title="Accept Compliant">
                    <md-filled-button class="button-primary" style={{ margin: "5px" }} onClick={() => handleStatusChange('Accept')}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg style={{ paddingRight: "10px" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" /></svg>
                            Accept Compliant</div>
                    </md-filled-button>
                </abbr>
                <abbr title="Reject Compliant">
                    <md-filled-button class="button-error" style={{ margin: "5px" }} onClick={() => handleStatusChange('Reject')}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg style={{ paddingRight: "10px" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>                    Reject Compliant</div>
                    </md-filled-button>
                </abbr>
            </div>}

            {compliant.status === 'Ongoing' && <div>
                <abbr title="Mark as Completed">
                    <md-filled-button class="button-primary" style={{ margin: "5px" }} onClick={() => handleStatusChange('Completed')}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg style={{ paddingRight: "10px" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" /></svg>
                            Mark as completed</div>
                    </md-filled-button>
                </abbr>
            </div>}
        </div>}

    </>
    );
}

export const getCompliantById = async (id) => {
    const res = await axios.get(`/compliants/${id}`)
    return res.data;
}
export default ViewCompliant;