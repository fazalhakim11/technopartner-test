import { Link, useLocation } from "react-router-dom";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import menu1 from "../../assets/menu1.png";
import menu2 from "../../assets/menu2.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-white fixed w-[100%] flex z-10 inset-x-0 bottom-0 justify-around py-3">
      <div>
        <Link to="/home">
          {location.pathname === "/home" ? (
            <img src={home1} alt="home" className="w-[30px] mx-auto" />
          ) : (
            <img src={home2} alt="home" className="w-[30px] mx-auto" />
          )}
          <p className={`${location.pathname !== "/home" && "text-[#929292]"}`}>Home</p>
        </Link>
      </div>
      <div>
        <Link to="/menu">
          {location.pathname === "/menu" ? (
            <img src={menu1} alt="menu" className="w-[30px] mx-auto" />
          ) : (
            <img src={menu2} alt="menu" className="w-[30px] mx-auto" />
          )}
          <p className={`${location.pathname !== "/menu" && "text-[#929292]"}`}>Menu</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
