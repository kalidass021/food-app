import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withSpeedyLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardSpeedy = withSpeedyLabel(RestaurantCard);

  // get online status from custom hook
  const onlineStatus = useOnlineStatus();

  console.log("restaurantList", restaurantList);

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
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  // conditional rendering
  // if (restaurantList.length === 0)
  return !restaurantList?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-blue-100 rounded-lg"
            onClick={filterBtnClick}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="m-5 flex flex-wrap justify-between">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`restaurants/${restaurant.info.id}`}
          >
            {/* if a delivery time is less than 30mins add speedy label*/}
            {console.log(
              "restaurant.info.sla.deliveryTime",
              restaurant?.info?.sla?.deliveryTime <= 30
            )}

            {restaurant.info.sla.deliveryTime <= 30 ? (
              <RestaurantCardSpeedy resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}

            {/* {
            restaurant.info.sla.deliveryTime < 26 ? <RestaurantCardSpeedy resData={restaurant} /> : <RestaurantCard resData={restaurant} />
          } */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
