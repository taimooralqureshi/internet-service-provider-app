import React, { Component } from 'react';
import './Navbar.css';
import Services from './Services';
import Customers from './Customers';
import Devices from './Devices';
import Home from './Home';
import Transactions from './Transactions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state={
      home:true, customers:false, devices:false, services:false, transactions:false
    };
  }

  toggleHome=()=>{
    this.setState({
      home:true,
      customers:false,
      devices:false,
      services:false,
      transactions:false
    });
  };

  toggleServices=()=>{
    this.setState({
      home:false,
      customers:false,
      devices:false,
      services:true,
      transactions:false
    });
  };

  toggleDevices=()=>{
    this.setState({
      home:false,
      customers:false,
      devices:true,
      services:false,
      transactions:false
    });
  };

  toggleCustomers=()=>{
    this.setState({
      home:false,
      customers:true,
      devices:false,
      services:false,
      transactions:false
    });
  };

  toggleTransactions=()=>{
    this.setState({
      home:false,
      customers:false,
      devices:false,
      services:false,
      transactions:true
    });
  };

  render(){
    return (
      <div className="App">
        <div id="navbar">
          {
            window.innerWidth>600 && <div className="navbar-max nav">
              <a onClick={this.toggleHome}><h3>Company Name</h3></a><br/>
              <a onClick={this.toggleHome}><FontAwesomeIcon className="icon" icon="home" />&nbsp;Home</a><br/>
              <a onClick={this.toggleServices}><FontAwesomeIcon className="icon" icon="signal" />Services</a><br/>
              <a onClick={this.toggleDevices}><FontAwesomeIcon className="icon" icon="digital-tachograph" />Devices</a><br/>
              <a onClick={this.toggleCustomers}><FontAwesomeIcon className="icon" icon="user-friends" />Customers</a><br/>
              <a onClick={this.toggleTransactions}><FontAwesomeIcon className="icon" icon="user-friends" />Transactions</a><br/>
              <div style={{padding:"100px"}}></div>
            </div>
          }
          {
            window.innerWidth<600 && <div className="navbar-min nav">
              <a onClick={this.toggleHome}><FontAwesomeIcon className="icon" icon="home" /></a><br/>
              <a onClick={this.toggleServices}><FontAwesomeIcon className="icon" icon="signal" /></a><br/>
              <a onClick={this.toggleDevices}><FontAwesomeIcon className="icon" icon="digital-tachograph" /></a><br/>
              <a onClick={this.toggleCustomers}><FontAwesomeIcon className="icon" icon="user-friends" /></a><br/>
              <a onClick={this.toggleTransactions}><FontAwesomeIcon className="icon" icon="user-friends" /></a><br/>
              <div style={{padding:"100px"}}></div>
            </div>
          }
        </div>

        {this.state.home && <Home/>}
        {this.state.services && <Services/>}
        {this.state.customers && <Customers/>}
        {this.state.devices && <Devices/>}
        {this.state.transactions && <Transactions/>}
      </div>
    );
  }
}

export default Navbar;
