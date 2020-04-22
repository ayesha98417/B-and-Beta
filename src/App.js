import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import Details from "./components/Details";
import Points from "./components/Points";
import Default from "./components/Default";
import WishList from "./components/WishList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render() { 
    return ( 
      <React.Fragment>
        <Navbar />
        <BrowserRouter>
        <Switch>
        
        <Route path="/Details" component={Details} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/Points" component={Points} />
        <Route path="/WishList" component={WishList} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route exact path="/Home" component={Home} />
        <Route path="/" component={Default} />
       </Switch>
       </BrowserRouter>
      </React.Fragment>
     );
  }
}
 
export default App;