import "@material/web/textfield/outlined-text-field";
import "@material/web/button/filled-button";
import "@material/web/button/text-button";
import "@material/web/icon/icon";
import "@material/web/iconbutton/icon-button";
import "@material/web/dialog/dialog";
import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/fab/fab";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import User from "./User";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
          
          <Routes>
            <Route path="/user/*" element={<User/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
