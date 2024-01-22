import React from "react";
import { MDBBtn, MDBIcon, MDBInputGroup } from "mdb-react-ui-kit";
import "./Profilepage.css";
import PersonalDetails from "./PersonalDetails";

function Profilepage() {
  return (
    <div>
      {/* <nav className="navbar-pro">
        <ul className="list-inline">
          <li className="list-inline-item">
            <MDBInputGroup
              className="mb-3"
              noBorder
              textBefore={<MDBIcon fas icon="search" />}
            >
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </MDBInputGroup>
          </li>
          <li className="list-inline-item">
            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fas icon="bell" />
            </MDBBtn>
          </li>
          <li className="list-inline-item">
            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="facebook-messenger" />
            </MDBBtn>
          </li>
          <li className="list-inline-item">
            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fas icon="user-cog" />
            </MDBBtn>
          </li>
        </ul>
      </nav> */}
     
    </div>
  );
}

export default Profilepage;
