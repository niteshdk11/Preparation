import React, { useContext, useEffect, useRef, useState } from "react";
import RestroCard ,{withPromoted} from "./RestroCard";
import Shimer from "../utils/Shimer";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext'

const RestroCards = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filterListOfRestro, setFilterListOfRestro] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");

  let ResturantOpen = withPromoted(RestroCard);

  const filRest = useRef(null);
  let onlineStatus = useOnlineStatus();

  let {user , setUsername} = useContext(UserContext);



  
  useEffect(() => {
    fetchData(); // only one time is called when the componenet is rendered initally
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resJson = await res.json();
      const apiData2 =
      resJson?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

      setListOfRestro(apiData2);
      setFilterListOfRestro(apiData2);
      // console.log("hello fetch is done ");
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const filteredRest = () => {
    if (showTopRated) {
      setFilterListOfRestro(listOfRestro);

      if (filRest.current) filRest.current.style.backgroundColor = "white";
    } else {
      const filteredRest = listOfRestro.filter((el) => el.info.avgRating > 4.3);
      setFilterListOfRestro(filteredRest);

      if (filRest.current) filRest.current.style.backgroundColor = "red";
    }
    setShowTopRated(!showTopRated);
  };


  if (!onlineStatus) {
    return <h1>You are offline</h1>;
  }


  return (
    <>
      <div className="w-full flex items-center justify-center gap-4 my-4">
        <button
          ref={filRest}
          onClick={filteredRest}
          className="px-4 py-2 rounded-xl bg-slate-300 text-black"
        >
          Top Rated Restaurant
        </button>
        <div className="search flex justify-center items-center gap-4">
          <input
            className="px-4 py-2 rounded-3xl bg-slate-300 outline-none  text-black border-none"
            type="text"
            placeholder="Search The Resturants "
            value={searchText}
            onChange={(e) => {
              let filteredData = listOfRestro.filter((el) =>
                el.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setFilterListOfRestro(filteredData);

              setSearchText(e.target.value);
            }}
          />
          <input
            className="px-4 py-2 rounded-3xl bg-slate-500 outline-none  text-black border-none"
            type="text"
            placeholder="Change Username"
            value={user}
            onChange={(e)=>{
          setUsername(e.target.value)
            }}
          />
          {/* <button
            className="px-4 py-2 rounded-xl bg-slate-300 text-black"
            onClick={() => {
              let filteredData = listOfRestro.filter((el) =>
                el.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListOfRestro(filteredData);
            }}
          >
            Search
          </button> */}
        </div>
        <h1 className="text-center text-2xl tracking-wider text-amber-50">
          Top Restaurant In Pune
        </h1>
      </div>
      <div className="cards flex flex-wrap gap-8 w-full padding-eq">
        {filterListOfRestro.length === 0
          ? Array.from({ length: 15 }).map((_, index) => <Shimer key={index} />)
          : filterListOfRestro.map((rest ,idx) => (
               rest.info.isOpen ? <ResturantOpen key={rest.info.id} data={rest} /> :
              <RestroCard key={rest.info.id} data={rest} />
            ))}
      </div>
    </>
  );
};

export default RestroCards;
