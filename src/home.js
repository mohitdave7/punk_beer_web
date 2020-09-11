import React, { useState, useEffect } from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Header from "./header";
import SearchBar from "./searchbar";
import RenderData from "./renderdata";

function Home() {
  const [hasError, setErrors] = useState(false);
  const [searchName, setSearchName] = useState("");
  let [page, setPage] = useState(1);
  let { beer } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((res) => {
          let updatedRes = []
          res.map((item) => (
            updatedRes.push({
              ...item,
              fav: beer.find((b)=>b.id === item.id)?.fav||false
            })
          ))
          dispatch({ type: "SET_BEER", payload: updatedRes });
        })
        .catch((err) => setErrors(err));
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (searchName.length > 0) {
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchName}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: "SET_BEER", payload: data }))
        .catch((err) => setErrors(err));
    }
  }, [searchName]);
  const fetchMoreData = () => {
    const clonedBeer = [...beer];
    fetch(`https://api.punkapi.com/v2/beers?page=${page + 1}&per_page=${25}`)
      .then((response) => response.json())
      .then((data) => {
        const newData = [...clonedBeer, ...data];
        dispatch({ type: "SET_BEER", payload: newData });;
        setPage(page + 1);
      });
  };
  const addFavourites = (e, i, item) => {
      beer[i].fav = !beer[i].fav
      dispatch({ type: "SET_BEER", payload: beer });

  };

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
          </div>
          {beer && beer.length ? (
            <RenderData
              data={beer}
              onAddFavourites={addFavourites}
              onFetchMore={fetchMoreData}
              forSelection={true}
              // favIds={favIds}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
