import { Route, Routes } from "react-router-dom";
import UserFront from "./user/UserFront";
import NewComplaint from "./user/NewComplaint";
import Complaints from "./user/Complaints";
import Innmates from "./user/Innmates";
import InnmatesEdit from "./user/InnmatesEdit";

import Main from "./Components/Main";


const User = () => {
    return (
        <Main content={
            <Routes>
                <Route exact path="/home" element={<UserFront />}></Route>
                <Route exact path="/compliants" element={<Complaints />}></Route>
                <Route exact path="/compliants/new" element={<NewComplaint />}></Route>
                <Route exact path="/innmates" element={<Innmates />}></Route>
                <Route exact path="/innmates/edit" element={<InnmatesEdit />}></Route>
            </Routes>} />
    );
}

export default User;