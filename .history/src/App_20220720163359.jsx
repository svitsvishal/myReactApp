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
        <Route exact path="/" element={<Home/>}>        
        </Route>
        <Route exact path="/products/:category" element={<ProductList/>}>        
        </Route>
        <Route exact path="/product/:id" element={<Product/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
       {user? <Route exact path="/login"  element={<Login/>}></Route>: <Route exact path="/" element={<Home/>}></Route>} 
        
        
        <Route exact path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  )
};

export default App;