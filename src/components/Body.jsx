import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  const filterBtnClick = () => {
    let filteredList = restaurantList.filter(res => res.info.avgRating > 4);
    setRestaurantList(filteredList);
  }

  useEffect(() => {
    console.log('useEffect is called');
  }, [])
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={filterBtnClick}>Top rated Restaurants</button>
      </div>
      <div className="res-container">
        {restaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
