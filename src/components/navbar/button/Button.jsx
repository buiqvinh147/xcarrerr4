import React from 'react'
import { Link } from 'react-router-dom'
import "../button/Button.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';




const Button = () => {
  return (
    <div className="btn">
        <Link to="login">
          <button className="btn-login">Login</button>
        </Link>

        <Link to="register">
          <button className="btn-register">Register</button>
        </Link>
        <Link to="shoppingcart">
           <Badge badgeContent = {4} style={{ color: "red", fontSize: 20 }} >
              <ShoppingCartOutlinedIcon style={{ color: "black", fontSize: 32 }}/>
           </Badge>
        </Link>
    </div>
    
    
  )
};

export default Button