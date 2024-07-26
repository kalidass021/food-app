import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ categoryData }) => {
  const { title, itemCards } = categoryData;
  // logic to show and hide the accodion body
  const [showItems, setShowItems] = useState(false);
  const showAccodionBody = () => {
    setShowItems(!showItems);
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4">
        {/* Accordion header */}
        <div className="flex justify-between cursor-pointer" onClick={showAccodionBody}>
          <span className="font-bold text-md">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion body */}
        {showItems && <ItemList itemCards={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
