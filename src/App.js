import "@material/web/textfield/outlined-text-field";
import "@material/web/checkbox/checkbox";
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
import "@material/web/menu/menu";
import "@material/web/menu/menu-item";
import "@material/web/progress/circular-progress";
import "@material/web/progress/linear-progress";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
// import { useState } from "react";
import Login from "./Components/Login";
import Main from "./Components/Main";
import UserFront from "./user/UserFront";
import NewComplaint from "./user/ComplaintNew";
import Complaints, { compliantsLoaderAdmin, compliantsLoaderHandler, compliantsLoaderUser } from "./user/Complaint";
import Innmates, { innmatesLoaderAdmin, innmatesLoaderUser } from "./user/Innmate";
import InnmatesEdit from "./user/InnmateEdit";
import InnmatesCheckout from "./user/InnmateCheckout";
import Guest, { guestLoaderUser, guestLoaderAdmin } from "./user/Guest";
import GuestNew from "./user/GuestNew";
import EditProfile from "./user/EditProfile";
import AdminFront from "./admin/AdminFront";
import UsersList, { usersListLoader } from "./admin/UsersList";
import ViewUser, { myDetailsLoader, userDetailLoader } from "./admin/ViewUser";
import ViewCompliant, { getCompliantById } from "./user/CompliantView";
import InnmateAdd from "./user/InnmateAdd";
import Error from "./Components/Error";
import Register, { newDetailsLoader } from "./Components/Register";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
const token = localStorage.getItem('token');
if (token) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route exact path="/" element={<Login />}></Route>
			<Route exact path="/register/1" element={<Register />} loader={newDetailsLoader}></Route>
			<Route exact path="/register/2" element={<Register />} loader={newDetailsLoader}></Route>

			<Route path="/user" element={<Main />} errorElement={<Error />}>
				<Route path="home" element={<UserFront />} />
				<Route path="compliants">
					<Route index element={<Complaints />} loader={compliantsLoaderUser}></Route>
					<Route path="new" element={<NewComplaint />}></Route>
					<Route path=":id/view" element={<ViewCompliant />} loader={(a) => getCompliantById(a.params.id)}></Route>
				</Route>
				<Route path="profile">
					<Route path="view" element={<ViewUser />} loader={myDetailsLoader}></Route>
					<Route path="edit" element={<EditProfile />} loader={myDetailsLoader}></Route>
				</Route>
				<Route path="innmates">
					<Route index element={<Innmates />} loader={innmatesLoaderUser}></Route>
					<Route path="edit" element={<InnmatesEdit />} loader={innmatesLoaderUser}></Route>
					<Route path="add" element={<InnmateAdd />}></Route>
					<Route path="checkout" element={<InnmatesCheckout />} loader={innmatesLoaderUser}></Route>
				</Route>
				<Route path="guest">
					<Route index element={<Guest />} loader={guestLoaderUser} />
					<Route path="new" element={<GuestNew />} />
				</Route>
			</Route>


			<Route path="/admin" element={<Main />} errorElement={<Error />}>
				<Route path="home" element={<AdminFront />} />
				<Route path="profile">
					<Route path="view" element={<ViewUser />} loader={myDetailsLoader}></Route>
					<Route path="edit" element={<EditProfile />} loader={myDetailsLoader}></Route>
				</Route>
				<Route path="users">
					<Route index element={<UsersList />} loader={usersListLoader} />
					<Route path=":userId">
						<Route path="view" element={<ViewUser />} loader={(a) => userDetailLoader(a.params.userId)} />
						<Route path="edit" element={<EditProfile />} loader={(a) => userDetailLoader(a.params.userId)} />
					</Route>
				</Route>
				<Route path="compliants">
					<Route index element={<Complaints />} loader={compliantsLoaderAdmin} />
					<Route path=":id/view" element={<ViewCompliant />} loader={(a) => getCompliantById(a.params.id)} />
				</Route>
				<Route path="innmates">
					<Route index element={<Innmates />} loader={innmatesLoaderAdmin}></Route>
					<Route path="edit" element={<InnmatesEdit />} loader={innmatesLoaderAdmin}></Route>
					<Route path="checkout" element={<InnmatesCheckout />} loader={innmatesLoaderAdmin}></Route>
				</Route>
				<Route path="guest">
					<Route index element={<Guest />} loader={guestLoaderAdmin} />
					<Route path="new" element={<GuestNew />} />
				</Route>
			</Route>
			<Route path="/handler" element={<Main />} errorElement={<Error />}>
				<Route path="profile">
					<Route path="view" element={<ViewUser />} loader={myDetailsLoader}></Route>
					<Route path="edit" element={<EditProfile />} loader={myDetailsLoader}></Route>
				</Route>
				<Route path="compliants">
					<Route index element={<Complaints />} loader={compliantsLoaderHandler}></Route>
					<Route path=":id/view" element={<ViewCompliant />} loader={(a) => getCompliantById(a.params.id)}></Route>
				</Route>

			</Route>
		</Route>
	)
)

function App() {
	return (<RouterProvider router={router} />);
}

export default App;