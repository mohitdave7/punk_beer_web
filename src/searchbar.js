// import React, { useState, useEffect } from "react";
// import RouteName from "./routes";
// function Searchbar() {
//     const [searchName, setSearchName] = useState("");
//     const [beer, setBeer] = useState([]);
//     const [hasError, setErrors] = useState(false);

//     useEffect(() => {
//         console.log("inside useeffect", searchName);
//         if(searchName.length>0){
//         fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchName}`)
//           .then((response) => response.json())
//           .then((data) => setBeer(data))
//           .catch((err) => setErrors(err));
//         }
//       }, [searchName]);
//   return (
//     <div className="search-box filter">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchName}
//         onChange={(e) => setSearchName(e.target.value)}
//       />
//       <i className="fas fa-search" aria-hidden="true"></i>
//       <div className="theme-btn filter text-right">
//         <button className="btn">Search</button>
//       </div>
//     </div>
//   );
// }
// export default Searchbar;
