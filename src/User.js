import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import UserFront from "./user/UserFront";
import NewComplaint from "./user/NewComplaint";
import Complaints from "./user/Complaints";
import Innmates from "./user/Innmates";
import InnmatesEdit from "./user/InnmatesEdit";


const User = () => {
    return ( 
        <>
            <Header/>
            <Navbar/>
            <div className="content">
            <Routes>
                <Route exact path="/home" element={<UserFront/>}></Route>
                <Route exact path="/compliants" element={<Complaints/>}></Route>
                <Route exact path="/compliants/new" element={<NewComplaint/>}></Route>
                <Route exact path="/innmates" element={<Innmates/>}></Route>
                <Route exact path="/innmates/edit" element={<InnmatesEdit/>}></Route>
            </Routes>
            </div>
        </>
     );
}
 
export default User;