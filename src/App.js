import React, { Component } from 'react';
import Time from './Time';

import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.tab=[
      {PartTime:"0",
      Description:"Hour"},
      {PartTime:"0",
      Description:"Minute"},
      {PartTime:"0",
      Description:"Second"}
    ]
    this.state={
      ms:108000
    }
  }
  render() {
    return (
      <div className="body">
        {this.tab.map((el,i)=>{
           if(i===0){
             return(<Time  PartTime={(Number.parseInt((el.PartTime)+this.state.ms/216000)).toString().padStart(2,'0')+" :"} Description={el.Description} />)
           }
           else {
             if(i===1){
               return(<Time  PartTime={(Number.parseInt((el.PartTime)+(this.state.ms%216000)/3600)).toString().padStart(2,'0')+" :"} Description={el.Description} />)
               }
             else
               return(<Time  PartTime={Number.parseInt((el.PartTime)+((this.state.ms%216000)%3600)/60).toString().padStart(2,'0')} Description={el.Description} />)
            }
        })}
        
      
      </div>
    );
  }
}

export default App;
