import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemCards }) => {
  console.log("itemCards", itemCards);
  return (
    <div>
      {itemCards.map((itemCard) => (
        <div
          key={itemCard.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{itemCard.card.info.name}</span>
              <span> - ₹ {itemCard.card.info.price / 100}</span>
            </div>
            <span className="text-xs">{itemCard.card.info.description}</span>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button className="p-3 mx-4 rounded-lg bg-gray-500 text-white shadow-lg">Add +</button>
            </div>
            <img src={`${CDN_URL}${itemCard.card.info.imageId}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
