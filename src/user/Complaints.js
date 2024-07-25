import './style/compliants.css'

import { Link } from 'react-router-dom';


const Complaints = () => {
    return ( 
    <>
        <Link to="/user/compliants/new">
                <md-fab class="fab">
                    <md-icon slot="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></md-icon>
                </md-fab>
            </Link>
    </> );
}
 
export default Complaints;