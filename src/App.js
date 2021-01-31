import Palette from "./Palette";
import seedColors from "./seedColors";
import {Route, Switch} from "react-router-dom";
import {generatePalette} from "./colorHelpers";
import './App.css';
import React, { Component } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.findPalette = this.findPalette.bind(this);
  }
  
  findPalette(id){
    return seedColors.find((palette)=>{
      return palette.id === id;
    })
  }
  render(){
    // console.log(generatePalette(seedColors[4]))
    return (
      <Switch>
        <Route exact path="/" render={()=><h1>Palette list goes here!!</h1>}/>
        <Route 
          exact 
          path="/palette/:id" 
          render={(routeProps)=><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>}
        />
      </Switch>
    /*    <div >
        <Palette palette={generatePalette(seedColors[4])}/>
      </div> */
    )
  }
}


export default App;
