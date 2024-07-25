import ItemList from "./ItemList";
const RestaurantCategory = ({ categoryData }) => {
  console.log("categoryData", categoryData);
  const { title, itemCards } = categoryData;
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4">
        {/* Accordion header */}
        <div className="flex justify-between">
          <span className="font-bold text-md">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion body */}
        <ItemList itemCards={itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
