import RestroCard, { withRestroCardOpened } from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //local State Varible ==> useState ==> Super PowerFul varible
  const [listOfRestro1, setListOfRestro1] = useState(null);

  const [filteredResstroD, setFilteredResstroD] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestroCardIsOpened = withRestroCardOpened(RestroCard);

  const { LoggedInUser, setuseName } = useContext(UserContext);

  useEffect(() => {
    fetData();
  }, []);

  const fetData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4645115&lng=73.8872252&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestro1(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResstroD(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        It's Look Like You are Offline !!! Please check your internet
        connections;
      </h1>
    );

  //Shimmer UI
  return listOfRestro1 === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search For Food"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-0.5 bg-green-50 hover:bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter  and  Update
              console.log(searchText);
              const restrofiltered = listOfRestro1.filter((access) =>
                access.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredResstroD(restrofiltered);
              console.log("Body Renderd");
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="bg-gray-50 hover:bg-gray-200 px-4 py-0.5 m-3 rounded-md"
            onClick={() => {
              const filtedList = listOfRestro1.filter(
                (access) => access.info.avgRating > 4
              );
              setListOfRestro1(filtedList);
              setFilteredResstroD(filtedList);
            }}
          >
            Top Rated Filtered
          </button>
        </div>
        <div className="search m-4 p-6 flex items-center">
          <label className="p-2">Name : </label>
          <input
            className="border border-solid-0.5 rounded-sm w-60 p-0.4"
            value={LoggedInUser}
            onChange={(e) => setuseName(e.target.value)}
            type="text"
            placeholder="Enter Your Account Name"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-20">
        {filteredResstroD.map((restaurant) => (
          <Link
            className="linkClean"
            key={restaurant.info.id}
            to={"/menu/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestroCardIsOpened resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
