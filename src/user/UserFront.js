import './style/user-front.css'

import CardLayout from '../Components/CardLayout'
import checkin from "../images/checkin.jpg"
import complaint from "../images/complaint.jpg"
import innmate from "../images/innmate.png"
import { Link } from 'react-router-dom';


const UserFront = () => {
    fetch('http://localhost:8080/greet').then((res) => console.log(res))
    return ( 
        
            <div style={{
                        display:"flex",
                        width:"max-width",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        }}>
            <Link to="../compliants"><CardLayout head="Complaint registration" img={complaint}/></Link>
            <Link to="../innmates"><CardLayout head="Innmate Details" img={innmate}/></Link>
            <Link to="../guest"><CardLayout head="Guest Check-in Check-out" img={checkin}/></Link>
            <Link to="../innmates/checkout"><CardLayout head="Innmate Check-in Check-out" img={checkin}/></Link>
                
            </div>

     );
}
 
export default UserFront;