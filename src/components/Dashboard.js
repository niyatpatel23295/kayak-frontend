import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import {Pie, Bar} from 'react-chartjs-2';
import * as API from '../api/API';


class Dashboard extends Component{

    state = {
       
        data:{
          labels: ['topPane'],
          datasets: [{
              label: 'Click Stream Data',
              data: [10],
              backgroundColor: [
                  '#9B2335',
                  '#DFCFBE',
                  '#55B4B0',
                  '#523454'
              ]
          }]
        }
    }

  componentWillMount(){
    API.getlogs()
        .then((res) => {
            if (res) {
                var labels = [];
                var data_chart = [];
                res.forEach(function(element, index){
                  this.state.data.labels.push(element.key);
                  this.state.data.datasets[0].data.push(element.value);
                }.bind(this));
                
                
                console.log(this.state.data.labels)
            } else {
            }
        });    
  }
  render(){
    console.log(JSON.stringify(this.state.data));
    return (
      <div>
          <Pie ref='chart' data={this.state.data} 
            width={100}
            height={20}
        
          />
          <Bar ref='chart' data={this.state.data} 
            width={100}
            height={20}
        
          />      
      </div>

    )
  }

}

export default Dashboard;