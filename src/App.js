import './App.css';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Category from './pages/Category';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/*adicionar mais categorias*/}
          <Route exact path="/banda" element={<Category pageName="banda"/>} />
          
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          {/*adicionar mais rotas*/}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
