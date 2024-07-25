import logo from "../images/1407443626926816.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

import './style/header.css'
const Header = (props) => {
  // alert( document.getElementById("nav-toggle"));

  // document.getElementById("nav-toggle").addEventListener("change",() =>{document.documentElement.style.setProperty("--navWidth",'0px')})

  const [name, setName] = useState("Cibi Vishnu");
  const [desig, setDesig] = useState("Student");
  const [dept, setDept] = useState("ECE");
  let titl = "BIT Staff Quarters";

  if (props.titl != undefined) {
    titl = props.titl;
  }

  return (
    <>
      <input type="checkbox" id="nav-toggle"></input>
      <div className="header-main">
        <label for="nav-toggle">
        <md-icon-button>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555555"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </md-icon-button>
        </label>
        <h3>{titl}</h3>
        <img
          onClick={() => {
            document.getElementById("profile-dialog").show();
          }}
          src={logo}
          alt="profile pic"
        />
      </div>

      <md-dialog id="profile-dialog">
        <div slot="headline" style={{ fontWeight: "bold" }}>
          Profile
        </div>
        <form slot="content" id="form-id" className="formId" method="dialog">
          <img src={logo}></img>
          <md-list>
            <md-list-item>
              <div slot="headline">Name:</div>
              <div slot="end">{name}</div>
            </md-list-item>
            <md-list-item>
              <div slot="headline">Desig:</div>
              <div slot="end">{desig}</div>
            </md-list-item>
            <md-list-item>
              <div slot="headline">Department:</div>
              <div slot="end">{dept}</div>
            </md-list-item>
          </md-list>
        </form>
        <div slot="actions">
          <Link to={"/editProfile"}>
            <md-text-button>Edit my profile</md-text-button>
          </Link>
          <md-filled-button form="form-id">OK</md-filled-button>
        </div>
      </md-dialog>
    </>
  );
};

export default Header;
