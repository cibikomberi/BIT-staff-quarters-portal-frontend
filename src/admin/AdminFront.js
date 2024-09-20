import usersImg from '../images/9614147.jpg'
import CardLayout from '../Components/CardLayout'

import checkin from "../images/checkin.jpg"
import complaint from "../images/complaint.jpg"
import innmate from "../images/innmate.png"

import { Link } from 'react-router-dom';

const AdminFront = () => {
    return (

        <div style={{
            display: "flex",
            width: "max-width",
            flexWrap: "wrap",
            justifyContent: "center",
        }}>
            <Link to="../users"><CardLayout head="Users" img={usersImg} /></Link>
            <Link to="../compliants"><CardLayout head="Complaint registration" img={complaint} /></Link>
            <Link to="../guest"><CardLayout head="Guest Check-in Check-out" img={checkin} /></Link>
            <Link to="../innmates"><CardLayout head="Innmate Details" img={innmate} /></Link>


        </div>
    );
}

export default AdminFront;