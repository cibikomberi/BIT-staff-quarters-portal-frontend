import './style/main.css'
import logo from "../images/1407443626926816.jpeg";
import { NavLink, Link, Outlet, useLocation, useNavigation, Navigate } from "react-router-dom";

const Main = (props) => {
    const isAuth = !!localStorage.getItem("token");
    
    const username = localStorage.getItem("username");
    const name = localStorage.getItem("name");

    const navigation = useNavigation();
    const location = useLocation();
    const currentLocation = location.pathname.split('/')[1];

    if (isAuth) {
    return (
        <div className='main'>
            <input type="checkbox" id="nav-toggle"></input>
            <label htmlFor="nav-toggle" className='nav-toggler'></label>
            <header className="header-main">
                <label htmlFor="nav-toggle" style={{ marginLeft: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </label>
                <h3>BIT Staff Quarters Portal</h3>
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
                    <img src={logo} alt="profile pic"></img>
                    <md-list>
                        <md-list-item>
                            <div slot="headline">Username:</div>
                            <div slot="end">{username}</div>
                        </md-list-item>
                        <md-list-item>
                            <div slot="headline">Name:</div>
                            <div slot="end">{name}</div>
                        </md-list-item>
                    </md-list>
                </form>
                <div slot="actions">
                    <Link to="profile/view" form="form-id1">
                        <md-text-button form="form-id1">View my profile</md-text-button>
                    </Link>
                    <md-filled-button form="form-id">OK</md-filled-button>
                </div>
            </md-dialog>

            {(currentLocation === "user") && <nav>
                <NavLink className='nav-items' to='home'>Home</NavLink>
                <NavLink className='nav-items' to='compliants'>Compliant Registration</NavLink>
                <NavLink className='nav-items' to='innmates'>Innmates</NavLink>
                <NavLink className='nav-items' to='guest'>Guest</NavLink>
            </nav>}

            {(currentLocation === "admin") && <nav>
                <NavLink className='nav-items' to='home'>Home</NavLink>
                <NavLink className='nav-items' to='users'>Users</NavLink>
                <NavLink className='nav-items' to='compliants'>Compliants</NavLink>
                <NavLink className='nav-items' to='innmates'>Innmates</NavLink>
                <NavLink className='nav-items' to='guest'>Guest</NavLink>
            </nav>}

            {(currentLocation === "handler") && <nav>
                <NavLink className='nav-items' to='compliants'>Compliants</NavLink>
            </nav>}

            <main className="content">
                {navigation.state === "loading" ?
                    <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <md-circular-progress indeterminate style={{ width: "75px", height: "75px" }}></md-circular-progress>
                    </div>
                    : <Outlet />}
            </main>
        </div>
    );} else {
        return <Navigate to="/" />;
      }
}

export default Main;