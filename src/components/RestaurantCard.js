import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = sla;
    return (
      <div className="m-4 p-4 w-[200px] bg-gray-50 hover:bg-gray-100">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    );
};


export default RestaurantCard;