import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeesServices from '../services/connections';


class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
   fullName:'',
   email:'',
   password:'',
   phnNumber:'',
        }
        this.changefullNameHandler=this.changefullNameHandler.bind(this);
        this.changeemailHandler=this.changeemailHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this);
        this.changephnNumberHandler=this.changephnNumberHandler.bind(this);     
        this.saveEmployee=this.saveEmployee.bind(this);
    }

  saveEmployee=(e)=>{
    e.preventDefault();
    let employee={
        fullName:this.state.fullName,
        email:this.state.email,
        password:this.state.password,
        phnNumber:this.state.phnNumber
    };

    console.log('employee=>'+JSON.stringify(employee));

    EmployeesServices.createEmployee(employee)
  }

    changefullNameHandler=(event)=>{
        this.setState({fullName:event.target.value});
    }
    changeemailHandler=(event)=>{
        this.setState({email:event.target.value});
    }
    changepasswordHandler=(event)=>{
        this.setState({password:event.target.value});
   }
   changephnNumberHandler=(event)=>{
    this.setState({phnNumber:event.target.value});
   }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offser-md-3 offser-md-3'>
                            <div className='card-body'><h1>user register</h1></div>
                            <div className='card-body'>
                           
                                <form>
                                    <div className='form-group'>
                                        <label>fullname</label>
                                        <input placeholder='fullname'name='fullName'className='form-control'
                                         value={this.state.fullName}onChange={this.changefullNameHandler}/>
                                            </div>         
                                            <div className='form-group'>
                                        <label>email</label>
                                        <input placeholder='email'name='email'className='form-control'
                                        value={this.state.email}onChange={this.changeemailHandler}/>
                                            </div>         
                                            <div className='form-group'>
                                        <label>password</label>
                                        <input placeholder='password'name='password'className='form-control'
                                        value={this.state.password}onChange={this.changepasswordHandler}/>
                                            </div>
                                            <div className='form-group'>
                                        <label>phnNumber</label>
                                        <input placeholder='phnNumber'name='phnNumber'className='form-control'
                                        value={this.state.phnNumber}onChange={this.changephnNumberHandler}/>
                                            </div>
                                           
                                          
                              

                                            <button className='btn-btn-success' onClick={this.saveEmployee} >save</button> 
                                        
                                                                   </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;