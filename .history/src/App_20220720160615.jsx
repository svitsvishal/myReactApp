import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  
  Route ,Routes,
  
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>        
        </Route>
        <Route exact path="/products/:category" element={<ProductList/>}>        
        </Route>
      </Routes>
    </Router>
  )
};

export default App;