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
import PrivateRoute from './services/PrivateRoute';
import { AuthProvider } from './services/context.tsx';

function App() {
  return (
    <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/banda" element={<Category pageName="Banda"/>} />
            <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path="/login" element={<LoginSignup/>}/>

            
            <Route path="/cart" element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }/>

            {/*adicionar mais categorias*/}
            <Route exact path="/banda" element={<Category pageName="Bandas"/>} />
          </Routes>
          <Footer/>
      </div>
    </AuthProvider>
  );
}

export default App;
