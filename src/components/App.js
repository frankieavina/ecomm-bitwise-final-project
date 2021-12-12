import '../App.css';
// Bootstrap Components 
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// react material 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// Hooks 
import React, { useState , useEffect } from "react";
// Router import
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Importing Components 
import CartPage from "./cart/CartPage"; 
import ProductDetailPage from "./product-detail/ProductDetailPage";
import CheckoutPage from "./checkout/CheckoutPage";
import ProductPage from "./product/ProductPage"; 
// Fetching info from Server
import { getProduct, getProductList } from '../utils';
// Importing Context 
import ProductsContext from '../context/ProductsContext';
import CartContext from '../context/CartContext'; 


function App() {

  // state for cart 
  const [productsInCart, setProductsInCart] = useState([]);
  // state for products
  const [products, setProductsList] = useState([]);
  // fetching data from api
  useEffect(() => {
      getProductList().then((data) => {
          //console.log("Here are the products we are fetching:", data);
          setProductsList(data);
      });
    }, []);

    //setTimeout(()=> console.log("what is in the product object before rendering:", products),1000); 

    // {products:products} since its a prop/object that we are passing in JSX  ???
  return (
  <div>
    <CartContext.Provider 
      value={{
        productsInCart: productsInCart, 
        addToCart: (product) => {
          //console.log("Product added to Cart:",product)
          setProductsInCart([...productsInCart, product])
        },
        removeFromCart: (deletedProductId) =>{
          //console.log('Removing item from cart', productsInCart)
          setProductsInCart(productsInCart.filter((productsInCart) => productsInCart.id != deletedProductId))
          //console.log('New Cart After Deleting:', productsInCart)
        },
        }}>
    <ProductsContext.Provider value={{products}} >
      <div className="App">
        <Router>
          {/* nav bar  */}
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand>Frankie's Store</Navbar.Brand>
              <Nav className="me-auto">
                <Link to='/'>
                  <Navbar.Brand>Products</Navbar.Brand>
                </Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Link to='/cart'>
                    <ShoppingCartIcon/>
                  </Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Link to="/"></Link>

          <Switch>
            <Route exact path="/">
              <ProductPage/>
            </Route>
            <Route path="/products/:productId">
              <ProductDetailPage/>
            </Route>
            <Route path='/checkout'>
              <CheckoutPage/>
            </Route>
            <Route path='/cart'>
              <CartPage/>
            </Route>
          </Switch>
        </Router>

      </div>
    </ProductsContext.Provider>
    </CartContext.Provider>

  </div>


  );
}

export default App;