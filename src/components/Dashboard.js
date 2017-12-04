import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import {Pie} from 'react-chartjs-2';


  var data = {
      labels: ["San Franscisco", "San Jose", "Ahmedabad"],
      datasets: [{
          label: '# of Votes',
          data: [4300, 3000, 1200],
          backgroundColor: [
              '#9B2335',
              '#DFCFBE',
              '#55B4B0'
          ]
      }]
  }


var MyComponent = React.createClass({
  render: function() {
    return <Pie ref='chart' data={data} 
    width={100}
    height={20}
    
    />
  }
});


class Dashboard extends Component{
  render(){
    return (
      
      <MyComponent />
    )
  }

}

export default Dashboard;