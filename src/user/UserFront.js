
import './style/user-front.css'


import CardLayout from '../Components/CardLayout'
import checkin from "../images/checkin.jpg"
import complaint from "../images/complaint.jpg"
import innmate from "../images/innmate.png"
import { Link } from 'react-router-dom';


const UserFront = () => {
    return ( 
        
            <div style={{
                        display:"flex",
                        width:"max-width",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        }}>
            <Link to="/user/compliants"><CardLayout head="Complaint registration" img={complaint}/></Link>
            <Link to="/user/innmates"><CardLayout head="Innmate Details" img={innmate}/></Link>
            <Link to="/user/guest"><CardLayout head="Guest Check-in Check-out" img={checkin}/></Link>
            <Link to="/user/innmates/checkout"><CardLayout head="Innmate Check-in Check-out" img={checkin}/></Link>
                
            </div>

     );
}
 
export default UserFront;