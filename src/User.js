import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import UserFront from "./user/UserFront";
import NewComplaint from "./user/NewComplaint";
import Complaints from "./user/Complaints";
import Innmates from "./user/Innmates";
import InnmatesEdit from "./user/InnmatesEdit";
import InnmatesCheckout from "./user/InnmatesCheckout";
import Guest from "./user/Guest";
import GuestNew from "./user/GuestNew";


const User = () => {

    return (
        <Main content={
            <Routes>
                <Route exact path="/home" element={<UserFront />}></Route>
                <Route exact path="/compliants" element={<Complaints />}></Route>
                <Route exact path="/compliants/new" element={<NewComplaint />}></Route>
                <Route exact path="/innmates" element={<Innmates />}></Route>
                <Route exact path="/innmates/edit" element={<InnmatesEdit />}></Route>
                <Route exact path="/innmates/checkout" element={<InnmatesCheckout />}></Route>
                <Route exact path="/guest" element={<Guest />}></Route>
                <Route exact path="/guest/new" element={<GuestNew />}></Route>
            </Routes>} />
    );
}

export default User;