import React, {Component} from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component = {Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
