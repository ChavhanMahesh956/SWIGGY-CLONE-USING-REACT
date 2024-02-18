import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-2.9 m-4">
          <li className="p-4">Online Status = {onlineStatus ? "✅ " : "❌"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 font-bold"><Link to = "/cart">🛒Cart  ({cartItems.length} items)</Link></li>
          <button
            className="login"
            onClick={() => {
              0;
              btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-4 font-bold">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
