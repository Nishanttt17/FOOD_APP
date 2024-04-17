import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
const Header=()=>{
    const [btnNameReact,setbtnNameReact] = useState("Login");
    return(
        <div className="header">
            <div className="Logo-container">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                  <Link to="/">Home</Link>  
                    </li>
                    <li>
                    <Link to="/about">About us</Link>
                   
                    </li>
                    <li>
                    <Link to="/contact">Contact us</Link>
                    </li>
                    
                    <li>cart</li>
                    <button className="Login" onClick={()=>{
                        btnNameReact==="Login" 
                        ?setbtnNameReact("Logout")
                        :setbtnNameReact("login");
                        }}
                    >
                    {btnNameReact}
                </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;