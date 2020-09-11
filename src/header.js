import React from "react";
import { useHistory } from "react-router";


function Header() {
    const history = useHistory();
   const changeroute=()=>{
    history.push({
       pathname:  "/favourites",
    })
    }
    const changeroute2=()=>{
        history.push({
           pathname:  "/home",
        })
        }

  return (
<header>
<div className="container-fluid">
  <div className="col-sm-12 header-menu">
    <div className="row">
      <div className="col-sm-6">
        <div className="top-menu-bar d-flex">
          <div className="logo">
            <h2>Beens Love Beers</h2>
          </div>
          <div className="toggle-top">
            <div id="toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 menu-links">
        <div className="links">
          <ul>
            <li>
              <a onClick={changeroute2}>Home</a>
            </li>
            <li>
              <a onClick={changeroute}>Favourites</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</header>    )
  }
export default Header;

