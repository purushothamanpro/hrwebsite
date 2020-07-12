import React from "react";
import "./App.css";

import { BrowserRouter as Router,Route } from "react-router-dom";
import { Admin } from "./Components/AdminLogin";
import { Dashboard } from "./Components/Dashboard";
import { Page } from "./Components/Page";

class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      isPageOpen:false,
      isHome:true,
      isCareer:false,
      isConatact:false
    }
  }
  check=(val)=>
  {
    if(val===true)
    {
      this.setState({isPageOpen:true})
      console.log(this.state.isPageOpen);
    }
  }  
 
  render()
  {
    console.log(this.state.isPageOpen);
    return(
      <Router>
    <Route exact path="/admin" render={(props) => (
    <Admin {...props} isAuthed={this.check} />
  )} />
  <Route exact path="/dashboard" render={(props) => (
    <Dashboard {...props} isAuthed={this.state.isPageOpen} />
  )} />
    <Route exact path="/" component={Page} />
  </Router>
    );
  }
}

export default App;



