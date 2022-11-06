import React, { Component } from 'react';
import EmployeesServices from '../services/connections';
import { Link } from "react-router-dom";
import "../css/mainconteny.css";

import AdminHeader from '../component/adminheader';
import Footer from './footer';

class myposts extends Component {
    
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
     }
    
     componentDidMount(){
        EmployeesServices.getEmployees().then((res)=>{
          this.setState({employees:res.data});  
        });
     }
    
    
    render() {
        

   const list= this.state.employees.map(
    employee=>


    <div className="card" key={employee.pid}>
    <div className="card_img">
          <img src={employee.image} /> 
    </div> 
    <div className="card_header">
        <h2>{employee.title}</h2>
        <p>{employee.address}</p>
        <p>{employee.type}</p>
        <p className="price"><span> RS {employee.price}</span></p>
     <Link to="/Productdetail"><div className="btn">  view</div></Link>
  
     <div className="btn">  delete</div> 
    </div>
</div>

  
)
        return (
            <div>
             
        
            <div className='main_content'>
               
    {list}
     </div>

     </div>
        );
    }
}

export default myposts;