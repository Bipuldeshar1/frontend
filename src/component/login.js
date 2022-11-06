
import React, { Component } from 'react';
import EmployeesServices from '../services/connections';

class login extends Component {
         constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
        this.changeemailHandler=this.changeemailHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this);
        this.login=this.login.bind(this);
    }
    login=(e)=>{
        e.preventDefault();
        let lo={
            email:this.state.email,
            password:this.state.password
        };
        console.log('lo=>'+JSON.stringify(lo));
        EmployeesServices.Login(lo);
    }

 changeemailHandler=(event)=>{
     this.setState({email:event.target.value});
 }
 changepasswordHandler=(event)=>{
     this.setState({password:event.target.value});
 }
  

    render() {
        return (
            <div>
                <div className='container'>
                   <div className='row'>
                     <div className='card col-md-6 offser-md-3 offser-md-3'>
                             <div className='card-body'><h1>login</h1></div>
                             <div className='card-body'>
                                 <form>
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
                                      <button className='btn-btn-success' onClick={this.login} >login</button> 
                                 </form>
                                 </div>
                                 </div>
                                 </div>
                     </div>    
            </div>
        );
    }
}

export default login;