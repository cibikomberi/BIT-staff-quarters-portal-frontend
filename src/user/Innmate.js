import "./style/innmate.css"
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const Innmates = () => {

    const innmatesList = useLoaderData();
    console.log(innmatesList);
    
    const location = useLocation();
    const currentLocation = location.pathname.split('/')[1];
    return (
        <div className='main-area' style={{ flexDirection: 'row', position: "relative" }}>
            <input className="search-field" placeholder="Search here" />

            {innmatesList.map((e, i) => (
                <div className="inn-list" key={i}>
                    <md-list >
                        <h3>{e.name}</h3>
                        <h5>{e.relation}</h5>
                        {(currentLocation === "admin") && 
                        <md-list-item>
                            <div slot="headline">Faculty:</div>
                            <div slot="end"></div>
                        </md-list-item>}
                        <md-list-item>
                            <div slot="headline">Age:</div>
                            <div slot="end">{e.age}</div>
                        </md-list-item>
                        <md-list-item>
                            <div slot="headline">Blood Group:</div>
                            <div slot="end">{e.bloodGroup}</div>
                        </md-list-item>
                        <md-list-item>
                            <div slot="headline">Aadhar:</div>
                            <div slot="end">{e.aadhar}</div>
                        </md-list-item>
                        <md-list-item>
                            <div slot="headline">Is Working:</div>
                            <div slot="end">{e.isWorking && "Yes"}{!e.isWorking && "No"}</div>
                        </md-list-item>
                    </md-list>
                </div>
            ))}

            <Link to="add">
                <md-fab lowered aria-label="Edit" class="fab">
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></md-icon>
                </md-fab>
            </Link>

            <Link to="edit">
                <md-fab lowered aria-label="Edit" class="fab" style={{ right: '110px'}}>
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg></md-icon>
                </md-fab>
            </Link>

            <Link to="checkout">
                <md-fab lowered aria-label="Edit" class="fab" style={{ right: '170px', scale: '0.85' }}>
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h-80v-80H200v560h560v-80h80v80q0 33-23.5 56.5T760-120H200Zm480-160-56-56 103-104H360v-80h367L624-624l56-56 200 200-200 200Z" /></svg></md-icon>
                </md-fab>
            </Link>
        </div>
    );
}

export const innmatesLoader = async() =>{
    const res = await fetch('http://localhost:8050/innmates')
    return res.json();
}

export default Innmates;