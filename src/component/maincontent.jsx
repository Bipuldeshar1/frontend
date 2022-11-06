import React, { Component } from 'react';
import EmployeesServices from '../services/connections';
import { Link } from "react-router-dom";
import "../css/mainconteny.css";


class ListEmployeeComponent extends Component {
 constructor(props){
    super(props)
    this.state={
        employees:[]
    }
 
    this.editEmployee=this.editEmployee.bind(this);
    this.deleteEmployee=this.deleteEmployee.bind(this);
 }
 deleteEmployee(id){
   EmployeesServices.deleteEmployee(id)
.then(res=>{
this.setState({employees:this.state.employees.filter(employee=>employee.id !==id)});
});
 }
editEmployee(id){
   this.props.history.push('/update/${id}');


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
         <Link to="/Productdetail"><div className="btn" onClick={()=>this.editEmployee(employee.id)}>  update </div></Link> 
         <Link to="/Productdetail"><div className="btn" onClick={()=>this.deleteEmployee(employee.id)}>  delete</div></Link> 
        </div>
    </div>
   
      
    )

       
   
    return(   
          <div>
           
        
        <div className='main_content'>
{list}
 </div>
 </div>
    )

    }
}

export default ListEmployeeComponent;