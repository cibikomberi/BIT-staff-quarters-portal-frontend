import './style/main.css'
import logo from "../images/1407443626926816.jpeg";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Main = (props) => {

    const [name, setName] = useState("Cibi Vishnu");
    const [desig, setDesig] = useState("Student");
    const [dept, setDept] = useState("ECE");
    let titl = "BIT Staff Quarters";

    return (
        <div className='main'>
            <input type="checkbox" id="nav-toggle"></input>
            <header className="header-main">
                <label for="nav-toggle" style={{marginLeft: "25px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </label>
                <h3>{titl}</h3>
                <img
                    onClick={() => {
                        document.getElementById("profile-dialog").show();
                    }}
                    src={logo}
                    alt="profile pic"
                />
            </header>
            <md-dialog id="profile-dialog">
                <div slot="headline" style={{ fontWeight: "bold" }}>
                    Profile
                </div>
                <form slot="content" id="form-id" className="formId" method="dialog">
                    <img src={logo}></img>
                    <md-list>
                        <md-list-item>
                            <div slot="headline">Name:</div>
                            <div slot="end">{name}</div>
                        </md-list-item>
                        <md-list-item>
                            <div slot="headline">Desig:</div>
                            <div slot="end">{desig}</div>
                        </md-list-item>
                        <md-list-item>
                            <div slot="headline">Department:</div>
                            <div slot="end">{dept}</div>
                        </md-list-item>
                    </md-list>
                </form>
                <div slot="actions">
                    <Link to={"/editProfile"}>
                        <md-text-button>Edit my profile</md-text-button>
                    </Link>
                    <md-filled-button form="form-id">OK</md-filled-button>
                </div>
            </md-dialog>

            <nav>
                <NavLink className='nav-items' to='/user/home'>Home</NavLink>
                <NavLink className='nav-items' to='/user/compliants'>Compliant Registration</NavLink>
                <NavLink className='nav-items' to='/user/innmates'>Innmates</NavLink>
            </nav>
            <main className="content">
                {props.content}
            </main>
        </div>
    );
}

export default Main;