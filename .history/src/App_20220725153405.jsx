import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
//import Product from "./pages/Product"; 
import {
  BrowserRouter as Router,
  
  Route ,Routes,Navigate
  
} from "react-router-dom";

const App = () => {
  const user =true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ !user? <Login/>:<Home/>}>        
        </Route>
        <Route  path="/products" element={<ProductList/>}>  
              <Route path=":category"element={<ProductList/>}> </Route>
        </Route>
        <Route exact path="/product/:id" element={<Product/>}>

        <Route exact path=":id" element={<Product/>}></Route>
        </Route>
        
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/login"  element={<Login/>}></Route>
        
        
        <Route exact path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  )
};

export default App;