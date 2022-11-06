import { Category } from '@mui/icons-material';
import React, { Component } from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import ImageSlider from '../component/imageslider';
import { Link } from "react-router-dom";

import ListEmployeeComponent from '../component/maincontent';
import { setAuthToken } from '../services/connections';


const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}


class home extends Component {
     render() {
        return (
            <div>
           
                <Header/>
           <ImageSlider/>
     
   
   <h1 className='text-center  text-capitalize'>category</h1>
                  
           <div className="container">
  <div className="row">
    <div className="col-sm">
    <Link to="/search"> 
    <div className="card" >
  <div className="card-body">
    <h5 className="card-title">Flats</h5>
 
  </div>
</div>
</Link>
    </div>
    <div className="col-sm">
      
    <Link to="/search"> 
    <div className="card" >
  <div className="card-body">
    <h5 className="card-title">Rooms</h5>
 
  </div>
</div>
</Link>
      
    </div>
    <div className="col-sm">
     
    <Link to="/search"> 
    <div className="card" >
  <div className="card-body">
    <h5 className="card-title">House</h5>
 
  </div>
</div>
</Link>

    </div>

    
  </div>
</div>
    

<h1 className='text-center  text-capitalize'>services</h1>
                  
                <ListEmployeeComponent/>
          
                <Footer/> 
          

            </div>
        );
    }
}

export default home;