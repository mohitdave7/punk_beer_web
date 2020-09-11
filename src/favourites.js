import React, { useState } from "react";
import "./App.css";
import RenderData from "./renderdata";

import { useSelector } from "react-redux";
import Header from "./header";

function Favourites() {
  const [searchName, setSearchName] = useState("");

  let { beer } = useSelector((state) => state);

  const favData = beer.filter((b) => b.fav);

  return (
    <div className="color-theme">
      <Header />
      <div className="head-mr"></div>

      <div className="beers">
        <div className="container-fluid">
          <div className="search-box filter">
            <input
              type="text"
              placeholder="Search..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <i className="fas fa-search" aria-hidden="true"></i>
            <div className="theme-btn filter text-right">
              <button className="btn">Search</button>
            </div>
          </div>{" "}
          <RenderData data={favData && favData} forSelection={false} />
        </div>
      </div>
    </div>
  );
}

export default Favourites;
