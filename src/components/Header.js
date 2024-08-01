import { LOGO_URL } from "../utils/constants";
// 2.1. Importing useContext hook and import the context (UserContext)
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// importing the UserContext
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // get online status from the custom hook
  const onlineStatus = useOnlineStatus();

  // 2.2. Get the data from the context
  const {loggedInuser} = useContext(UserContext);

  // Read the data from the redux store
  // Subscribing to the store using selector
  // also we're mentioning which portion of the store needs to be accessed
  const cartItems = useSelector((store) => store.cart.items);

  console.log('data', loggedInuser);
  return (
    // if device size is greater than sm then bg-yellow-50
    // if device size is greater than lg then bg-green-50
    <div className="flex justify-between bg-pink-100 shadow-md sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅': '🔴'}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold"><Link to="/cart">Cart: {cartItems.length} items</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        {/* 2.3. Using the context data */}
          <li className="px-4">{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
