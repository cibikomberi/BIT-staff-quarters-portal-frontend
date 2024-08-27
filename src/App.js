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
import "@material/web/progress/circular-progress";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login";
import Main from "./Components/Main";
import UserFront from "./user/UserFront";
import NewComplaint from "./user/ComplaintNew";
import Complaints, { compliantsLoaderUser } from "./user/Complaint";
import Innmates, { innmatesLoader } from "./user/Innmate";
import InnmatesEdit from "./user/InnmateEdit";
import InnmatesCheckout from "./user/InnmateCheckout";
import Guest, { guestLoader } from "./user/Guest";
import GuestNew from "./user/GuestNew";
import EditProfile from "./user/EditProfile";
import AdminFront from "./admin/AdminFront";
import UsersList, { facultyListLoader } from "./admin/UsersList";
import ViewUser, { facultyDetailLoader } from "./admin/ViewUser";
import ViewCompliant, { getCompliantById } from "./user/CompliantView";
import InnmateAdd from "./user/InnmateAdd";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route exact path="/" element={<Login />}></Route>
			<Route path="/user" element={<Main />}>
				<Route path="home" element={<UserFront />} />
				<Route path="compliants">
					<Route index element={<Complaints />} loader={compliantsLoaderUser}></Route>
					<Route path="new" element={<NewComplaint />}></Route>
					<Route path=":id/view" element={<ViewCompliant />} loader={(a) =>getCompliantById(a.params.id)}></Route>
				</Route>
				<Route path="editProfile" element={<EditProfile />}></Route>
				<Route path="innmates">
					<Route index element={<Innmates />} loader={innmatesLoader}></Route>
					<Route path="edit" element={<InnmatesEdit />} loader={innmatesLoader}></Route>
					<Route path="add" element={<InnmateAdd />}></Route>
					<Route path="checkout" element={<InnmatesCheckout />} loader={innmatesLoader}></Route>
				</Route>
				<Route path="guest">
					<Route index element={<Guest />} loader={guestLoader}/>
					<Route path="new" element={<GuestNew />} />
				</Route>
			</Route>
			<Route path="/admin" element={<Main />}>
				<Route path="home" element={<AdminFront />} />
				<Route path="users">
					<Route index element={<UsersList />} loader={facultyListLoader}/>
					<Route path=":userId">
						<Route path="view" element={<ViewUser />} loader={(a) => facultyDetailLoader(a.params.userId)}/>
						<Route path="edit" element={<EditProfile />} />
					</Route>
				</Route>
				<Route path="compliants">
					<Route index element={<Complaints />}  loader={compliantsLoaderUser}/>
					<Route path=":id/view" element={<ViewCompliant />}  loader={(a) =>getCompliantById(a.params.id)}/>
				</Route>
				<Route path="innmates">
					<Route index element={<Innmates />}  loader={innmatesLoader}></Route>
					<Route path="edit" element={<InnmatesEdit />} loader={innmatesLoader}></Route>
					<Route path="checkout" element={<InnmatesCheckout />} loader={innmatesLoader}></Route>
				</Route>
				<Route path="guest">
					<Route index element={<Guest />}  loader={guestLoader}/>
					<Route path="new" element={<GuestNew />} />
				</Route>
			</Route>
		</Route>
	)
)

function App() {
	return (<RouterProvider router={router} />);
}

export default App;