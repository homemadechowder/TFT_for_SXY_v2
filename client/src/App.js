import React ,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemTable from '../src/pages/Main/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={ItemTable} />  
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
