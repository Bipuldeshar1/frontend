import React from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { Link } from "react-router-dom";
import '../css/header.css';

export default function AdminHeader(props){
  
    return(
   <nav >
 <Link to="/"><div className="logo">logo.</div></Link>

    
<div className="log-signin">
<ul>
  
<Link to="/"><li>home</li></Link>

<Link to="/admin"><li>posts</li></Link>

<Link to="/addposts"><li>addposts</li></Link>



</ul>
</div>
     </nav>
     
    )
}