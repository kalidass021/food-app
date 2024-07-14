import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // get online status from custom hook
  const onlineStatus = useOnlineStatus();

  // console.log("Body rendered");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  const filterBtnClick = () => {
    let filteredList = restaurantList.filter((res) => res.info.avgRating > 4);
    setRestaurantList(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // optional chaining
      setRestaurantList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(`Error while fetching the data ${err}`);
      throw err;
    }
  };

  // if onlineStatus === false
  if (!onlineStatus) {
    return <h1>Looks like you're offline!! Please check your internet connection</h1>;
  }


  // conditional rendering
  // if (restaurantList.length === 0)
  return !restaurantList?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={() => {
              // Filter the res and update the UI
              // search text
              console.log("searchText", searchText);
              const filteredRestaurant = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="filter-btn" onClick={filterBtnClick}>
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
