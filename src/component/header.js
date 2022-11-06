import React from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from "react-router-dom";
import '../css/header.css';

export default function Header(props){
  
    return(
   <nav >
 <Link to="/"><div className="logo">logo.</div></Link>
<ul>
     <li>  <div className="search">
      <div className="searchInputs">
        <input
          type="text" placeholder="enter location"/>
        <div className="searchIcon">  
           <Link to="/search"> <SearchIcon /></Link>
        </div>
      </div>
        </div></li>
</ul>
    
<div className="log-signin">
<ul>
  
<Link to="/login"><li>loggin</li></Link>

<Link to="/signin"><li>signup</li></Link>

<li>  <Link to="/admin">  <AccountCircleIcon/></Link></li>

</ul>
</div>
     </nav>
     
    )
}