import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Category from './pages/Category.tsx';
import Footer from './components/footer/Footer';
import PrivateRoute from './services/PrivateRoute';
import { AuthProvider } from './services/context.tsx';

function App() {
  return (
    <AuthProvider>
      
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/banda" element={<Category category="1"/>} />
            <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path="/login" element={<LoginSignup/>}/>

            
            <Route path="/cart" element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }/>
          </Routes>
          <Footer/>
        </div>
    </AuthProvider>
  );
}

export default App;
