import React, { useState } from "react";
import "./Navbar.css";
import { Link }  from "react-router-dom";
import { NavItems } from "./NavItems";
import Button from "./button/Button"
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Dropdown from "./Dropdown/Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
            voucher hunter 
        </Link>
      {/* <div className="search-container">
        <form action="/">
          <input type="text" placeholder="" name="search" />
          <button type="submit"><SearchOutlinedIcon style={{ color: "black", fontSize: 12 }} /></button>
        </form>
      </div>
         */}

      <ul className="nav-items">
        {NavItems.map((item) => {
          if (item.title === "Products") {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && <Dropdown />}
              </li>
            );
          }
          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
        <Button />
      </nav>
      
    </div>
  );
}
    


export default Navbar