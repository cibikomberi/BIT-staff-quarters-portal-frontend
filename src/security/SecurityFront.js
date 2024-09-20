import CardLayout from '../Components/CardLayout'
import checkin from "../images/checkin.jpg"

import { Link } from 'react-router-dom';

const SecurityFront = () => {
    return (

        <div style={{
            display: "flex",
            width: "max-width",
            flexWrap: "wrap",
            justifyContent: "center",
        }}>
            <Link to="../verifyCheckout"><CardLayout head="Verify Checkout" img={checkin} /></Link>
        </div>
    );
}

export default SecurityFront;