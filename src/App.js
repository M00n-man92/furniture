/* import Nav from './pages/nav/Navigation'
import Sliders from './pages/slider/Sliders' */
import './app.scss'
// import Catagories from './pages/catgories/MaleCatagories';
import FemaleCat from './pages/catgories/femalecat/FemaleCat'
import MaleCat from './pages/catgories/malecatagory/MaleCat'
/* import Products from './pages/products/Products';
import Footer from './pages/footer/Footer'; */
import ProductList from './pages/products/productsList/ProductList';
import Item from './pages/item/Item';
import Login from './pages/signin/Login';
import Register from './pages/signup/Register';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
// import Message from './pages/message/Message'
import Like from './pages/like/Like';
import Forgot from './pages/forgot/Forgot'
// import Stripe from './pages/stripe/Stripe'; 
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Accessory from './pages/catgories/accessories/Accessory';
// import Product from './pages/products/product/Product';
// import {useSelector} from 'react-redux'
// import { useHistory } from 'react-router-dom';
// import {useEffect} from 'react'
// import "./app.css";
function App() {
  // const user = false
  const people = localStorage.getItem("persist:root")
  var como
  var commonPeople
  if (people) {
    como = JSON.parse(people).user
    commonPeople = JSON.parse(como).currentUser
    // window.location.reload()


  }
  // window.location.reload()

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/clothingproducts/women">
            <FemaleCat />
          </Route>
          <Route exact path="/clothingproducts/men">
            <MaleCat />
          </Route>
          <Route path="/products/:sex/:catagory">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Item />
          </Route>
          <Route path="/likes">
            <Like />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/accessory">

            <Accessory />
          </Route>
          <Route path="/forgot">
            {commonPeople ? <Redirect to="/" /> : <Forgot />}
          </Route>

          <Route path="/register">
            {commonPeople ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/login">
            {commonPeople ? <Redirect to="/" /> : <Login />}

          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
