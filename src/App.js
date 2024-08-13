import "@material/web/textfield/outlined-text-field";
import "@material/web/button/filled-button";
import "@material/web/button/elevated-button";
import "@material/web/button/text-button";
import "@material/web/icon/icon";
import "@material/web/iconbutton/filled-icon-button";
import "@material/web/iconbutton/icon-button";
import "@material/web/dialog/dialog";
import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/fab/fab";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login";
import Main from "./Components/Main";
import UserFront from "./user/UserFront";
import NewComplaint from "./user/NewComplaint";
import Complaints from "./user/Complaints";
import Innmates from "./user/Innmates";
import InnmatesEdit from "./user/InnmatesEdit";
import InnmatesCheckout from "./user/InnmatesCheckout";
import Guest from "./user/Guest";
import GuestNew from "./user/GuestNew";
import EditProfile from "./user/EditProfile";
import AdminFront from "./admin/AdminFront";
import UsersList from "./admin/UsersList";
import ViewUser from "./admin/ViewUser";
import ViewCompliant from "./user/ViewCompliant";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route exact path="/" element={<Login />}></Route>
			<Route path="/user" element={<Main />}>
				<Route path="home" element={<UserFront />} />
				<Route path="compliants">
					<Route index element={<Complaints />}></Route>
					<Route path="new" element={<NewComplaint />}></Route>
					<Route path=":id/view" element={<ViewCompliant />}></Route>
				</Route>
				<Route path="editProfile" element={<EditProfile />}></Route>
				<Route path="innmates" element={<Innmates />}></Route>
				<Route path="innmates/edit" element={<InnmatesEdit />}></Route>
				<Route path="innmates/checkout" element={<InnmatesCheckout />}></Route>
				<Route path="guest" element={<Guest />}></Route>
				<Route path="guest/new" element={<GuestNew />}></Route>
			</Route>
			<Route path="/admin" element={<Main />}>
				<Route path="home" element={<AdminFront />} />
				<Route path="users">
					<Route index element={<UsersList />} />
					<Route path=":userId">
						<Route path="view" element={<ViewUser />}/>
						<Route path="edit" element={<EditProfile />}/>
					</Route>
				</Route>
			</Route>

		</Route>
	)
)

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
