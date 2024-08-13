import usersImg from '../images/9614147.jpg' 
import CardLayout from '../Components/CardLayout'

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
            <Link to="../compliants"><CardLayout head="Users" img={usersImg} /></Link>
            <Link to="../compliants"><CardLayout head="Users" img={usersImg} /></Link>
            <Link to="../compliants"><CardLayout head="Users" img={usersImg} /></Link>


        </div>
    );
}

export default AdminFront;