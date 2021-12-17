import '../App.css';
// Bootstrap Components 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown} from 'react-bootstrap';
// react material 
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddCommentIcon from '@mui/icons-material/AddComment';
// Hooks 
import React, { useState , useEffect } from "react";
// Router import
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Importing Components 
import CartPage from "./cart/CartPage"; 
import ProductDetailPage from "./product-detail/ProductDetailPage";
import CheckoutPage from "./checkout/CheckoutPage";
import ProductPage from "./product/ProductPage"; 
import AddingProduct from './AddingProductRedux/AddingComment';
// Fetching info from Server
import { getProductList, getProductListCategory } from '../utils/utils';
// Importing Context 
import ProductsContext from '../context/ProductsContext';
import CartContext from '../context/CartContext'; 
import ThankYouPage from './thankyou/ThankYouPage';




function App() {
  // style for badge 
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  // use state initializations 
  const [productsInCart, setProductsInCart] = useState([]);
  const [products, setProductsList] = useState([]);
  const [dropDown, setDropDown] = useState('Featured');
  const [navDropDown, setNavDropDown] = useState('Products'); 
  const [saveOldList, setSaveOldList] = useState(true);
  const [oldFeatured, setOldFeatured] = useState([]);
  let oldFeaturedListArray = []; 
  //let saveOldList = true; 

  // fetching data from api thorugh use effect hook 
  useEffect(() => {
      getProductList().then((data) => {
          //console.log("Here are the products we are fetching:", data);
          setProductsList(data);
      });
    }, []);

  // function executed when selecting a category 
  function handleNavSelect(e){
    setNavDropDown(e); 
    //--------------setSaveOldList(true);  
    if( e == 'products'){ 
      getProductList().then((data) => {
        setProductsList(data);
      });
      return ; 
    }
    getProductListCategory(e).then((data)=>{
    setProductsList(data);
    });
  }

//------------------------------------------- rendering ----------------------------------------------------
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
        clearCart: () => {
          setProductsInCart([]);
        },
        updateQuantity: (id, quantity) =>{
          let newArr = [...productsInCart];
          let index = productsInCart.findIndex( x => x.id == id)
          newArr[index].quantity = quantity; 
          setProductsInCart(newArr);
        }
        }}>
    <ProductsContext.Provider value={{
      products: products, 
      setNav: (item)=>{
        setDropDown(item);
        // keep old featured list
        // console.log(saveOldList)
        // if (saveOldList === true){
          
        //   oldFeaturedListArray= [...products];
        //   setSaveOldList(false); 
        //   console.log("List of Old Featured:", oldFeaturedListArray);
        //   //setOldFeatured([...holdFeatured]);

        // }

          // sort products array 
          if(item == 'Price: Low to High'){
            console.log(oldFeaturedListArray)
            setProductsList([...products].sort((a,b)=>(a.price > b.price ? 1 : -1)));
          }
          // sort products hight to low [...arr]-> so wont override the original array
          else if(item == 'Price: High to Low'){
            console.log(oldFeaturedListArray)
            setProductsList([...products].sort((a,b)=>(a.price < b.price ? 1 : -1)));
          }
          else{
            //console.log(item)
            //console.log("Pressed on Feature:",oldFeaturedListArray)
            //setProductsList(oldFeaturedListArray)
            setProductsList([...products].sort((a,b)=>(a.id > b.id ? 1 : -1)))

          }
      },
      }} >
      <div className="App">
        <Router>
          {/* nav bar  */}
          <Navbar bg="light" variant="light">
            <Container>
              <Link style={{textDecoration:"none"}} to='/'> <Navbar.Brand><StorefrontIcon/>Frank's</Navbar.Brand> </Link>
              <Nav onSelect={e => handleNavSelect(e)} >
                <NavDropdown title={navDropDown} id="basic-nav-dropdown">
                  <NavDropdown.Item eventKey="products">Products</NavDropdown.Item>
                  <NavDropdown.Item eventKey="men's clothing">Men's Clothing</NavDropdown.Item>
                  <NavDropdown.Item eventKey="women's clothing">Women's Cloting</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="jewelery" >Jewelery</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="electronics">Electronics</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav style={{padding:"1.25", margin:"1.25rem"}} >
                <Link to='/add' style={{textDecoration:"none"}}>
                  <AddCommentIcon style={{maring:'0 auto'}}/>
                </Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Link to='/cart'>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={productsInCart.length} color="primary">
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <ProductPage value={dropDown} />
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
            <Route path='/add'>
              <AddingProduct/>
            </Route>
            <Route path='/thankyou'>
              <ThankYouPage/>
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