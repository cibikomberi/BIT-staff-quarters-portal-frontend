import CardLayout from '../Components/CardLayout'
import complaint from "../images/complaint.jpg"

import { Link } from 'react-router-dom';

const HandlerFront = () => {
    return (

        <div style={{
            display: "flex",
            width: "max-width",
            flexWrap: "wrap",
            justifyContent: "center",
        }}>
            <Link to="../compliants"><CardLayout head="Complaint registration" img={complaint}/></Link>
        </div>
    );
}

export default HandlerFront;