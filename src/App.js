import React from "react";
import './App.css';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import CartIcon from "./components/CartIcon";
import {Provider} from "react-redux";
import store from "./store/store";

//pages
import Home from "./pages/home";
import Products from "./pages/products";
import cart from "./pages/cart";
import Product from "./pages/Product";


function App() {
  return (

    <Router>
    <div className ="container">
     
<nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <div className ="container-fluid">
    <a className ="navbar-brand"  > <span>AUTO</span>STORE<span>.tn</span></a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="naav">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <Link className ="nav-link active"  to="/">Home</Link>
        </li>
        <li className ="nav-item">
        
          <Link className ="nav-link" to="Products">Products</Link>
        </li>

        <li className ="nav-item">
          <Link className ="nav-link" to="/cart">Your Cart</Link>
        </li>
      </ul>
    </div>
    </div>
  </div>
<div>
  <CartIcon/>
  </div>
</nav>

<Route path="/" component={Home} exact/>
<Route  path="/Products" component={Products} exact/>
<Route  path="/Products/:id" component={Product}/>
<Route  path="/cart" component={cart}/>


</div>
</Router>



  );
}

function AppWithStore()
{
  return <Provider store={store}>

    <App/>
  </Provider>

}

export default AppWithStore;
