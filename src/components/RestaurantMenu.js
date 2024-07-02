import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=558083&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setResInfo(json);
      console.log("json", json);
    } catch (err) {
      console.error(`Error while fetching menu ${err}`);
      throw err;
    }
  };

  // const {cuisines} = resInfo.data.cards[2].card.card.info;

  // if (resInfo === null)
  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>{resInfo.data.cards[2].card.card.info.cuisines.join(", ")}</h3>
      <h3>{resInfo.data.cards[2].card.card.info.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
