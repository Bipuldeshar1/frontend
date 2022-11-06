import React, { Component } from 'react';
import EmployeesServices from '../services/connections';
class Update extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            title:'',
            address:'',
            type:'',
            price:'',
            multipartFile:'',

        }
        this.changetitleHandler=this.changetitleHandler.bind(this);
        this.changeaddressHandler=this.changeaddressHandler.bind(this);
        this.changetypeHandler=this.changetypeHandler.bind(this);
        this.changepriceHandler=this.changepriceHandler.bind(this);
        this.changemultipartFileHandler=this.changemultipartFileHandler.bind(this);
        this.Update=this.Update.bind(this);
    }

    componentDidMount(){
        EmployeesServices.getEmployeeByID(this.state.id).then((res)=>{
     let employee=res.data;
     this.setState({
    title:employee.title,
    address:employee.address,
    type:employee.type,
   price:employee.price,
   multipartFile:employee.multipartFile
});
        });
    }
    Update=(e)=>{
        e.preventDefault();
        let c={
        title:this.state.title,
        address:this.state.address,
        type:this.state.type,
        price:this.state.price,
        multipartFile:this.state.multipartFile

    };
    console.log('c=>'+JSON.stringify(c));
    EmployeesServices.UpdateEmployee(c,this.state.id).then(res=>{
        this.props.history.push('/');
    });

    
}
changetitleHandler=(event)=>{
    this.setState({title:event.target.value});
}

changeaddressHandler=(event)=>{
    this.setState({address:event.target.value});
}

changetypeHandler=(event)=>{
    this.setState({type:event.target.value});
}

changepriceHandler=(event)=>{
    this.setState({price:event.target.value});
}

changemultipartFileHandler=(event)=>{
    this.setState({multipartFile:event.target.value});
}
    render() {
        return (
            <div>
               <div className='container'>
                    <div className='row'>
                    <div className='card col-md-6 offser-md-3 offser-md-3'>
                            <div className='card-body'>create</div>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>title</label>
                                        <input placeholder='title'name='title'className='form-control'
                                          value={this.state.title}onChange={this.changetitleHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>address</label>
                                        <input placeholder='address'name='address'className='form-control'
                                          value={this.state.address}onChange={this.changeaddressHandler}/> 
                                        
                                    </div>
                                    <div className='form-group'>
                                        <label>type</label>
                                        <input placeholder='type'name='type'className='form-control'
                                          value={this.state.type}onChange={this.changetypeHandler}/> 
                                        
                                    </div>
                                    <div className='form-group'>
                                        <label>Price</label>
                                        <input placeholder='Price'name='Price'className='form-control'
                                         value={this.state.Price}onChange={this.changePriceHandler}/> 
                                        
                                    </div>
                                    <div className='form-group'>
                                        <label>image</label>
                                        <input type="file" name="image"  className="form-control"
                                          value={this.state.multipartFile} onChange={this.changemultipartFileHandler} /> 
                                       
                                        
                                    </div>

                                    <button className='btn-btn-success' onClick={this.Update} >save</button>
                                </form>
                                </div>
                                </div>
                                </div>
                    </div>    
            </div>
            
        );
    }
}

export default Update;