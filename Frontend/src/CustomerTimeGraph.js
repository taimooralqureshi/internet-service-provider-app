import React, { Component } from 'react';
import Plot from 'react-plotly.js';

  class CustomerTimeGraph extends Component{
    constructor(props){
      super(props);
      this.state={
        customers:[], dates:[], no_of_customers:[]
      };
    }

    componentDidMount(){
      this.getCustomers();
    }

    getCustomers = _ =>{
        fetch('http://localhost:4000/customers')
        .then(res => {
          return res.json()
       })
      .then(customers => {
          this.setState({ customers: customers })
       })
        .catch(err => console.error(err));
    };

    GroupByDate = customer => {
      let i=0, cust=[];
      //grouping customers of same date
      while(customer.length!=0)
      {
        let temp=[];
        let cus=customer[0];
        for(let x=0; x<customer.length; x++)
        {
          if(cus.active_date==customer[x].active_date){
            temp.push(customer[x]);
            customer.splice(x,1);
          }
        }
        cust.push(temp)
      }
      this.state.customers=cust;
    }

    getData = () =>{
      this.GroupByDate(this.state.customers);
      for(let i=0; i<this.state.customers.length; i++)
      {
        this.state.dates.push(this.state.customers[i][0].active_date);
        this.state.no_of_customers.push(this.state.customers[i].length);
      }
    }


    render(){
      return(
      <div>
        {this.getData()}
        {
          // this.state.customers.map((item, i) => (
          //   this.state.customers[i].map((items, is) => (
          //   <tr key={is}>
          //     <td>{items.active_date}</td>
          //   </tr>
          //   ))
          // ))
        }
        <Plot
          data={[
            {
              x: this.state.dates,
              y: this.state.no_of_customers,
              type: 'bar',
              marker: {color: 'orange'},
            }
          ]}
          layout={{title: 'Customer Time Graph'}}
        />
      </div>
    );
  }
}

export default CustomerTimeGraph;
