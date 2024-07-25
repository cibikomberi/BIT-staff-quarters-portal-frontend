import { NavLink } from "react-router-dom";

import './style/navbar.css'

const Navbar = () => {
    return ( 
        <div className="nav">
            <NavLink className='nav-items' to='/user/home'>Home</NavLink>
            <NavLink className='nav-items' to='/user/compliants'>Compliant Registration</NavLink>
            <NavLink className='nav-items' to='/user/innmates'>Innmates</NavLink>
        </div>
     );
}
 
export default Navbar;