import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 * - logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - Restaurant card
 *       - Img
 *       - Name of the res, Star rating, cusine, delivery time,
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "#f0f0f0"
// }

const RestaurantCard = (props) => {
  const {resData} = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(', ')}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating} ⭐</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};


const resObj = {
  "info": {
  "id": "564242",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_564242.JPG",
  "locality": "Rajiv Gandhi Salai",
  "areaName": "Sholinganallur",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Burgers",
  "Fast Food",
  "Rolls & Wraps"
  ],
  "avgRating": 4.2,
  "parentId": "547",
  "avgRatingString": "4.2",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 32,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-06-18 23:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Burger.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Burger.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "30% OFF",
  "subHeader": "UPTO ₹75"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/kfc-rajiv-gandhi-salai-sholinganallur-chennai-564242",
  "type": "WEBLINK"
  }
  }


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
        resData={resObj}
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(<AppLayout />);
