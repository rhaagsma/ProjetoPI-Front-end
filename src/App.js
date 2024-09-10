import './App.css';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/user/LoginSignup';
import Products from './pages/Products';
import Footer from './components/footer/Footer';
import PrivateRoute from './services/PrivateRoute';
import { AuthProvider } from './services/context';
import Profile from './pages/user/Profile';
import AdminPage from './pages/user/AdminPage';
import Special from './components/hero/special';

function App() {
  return (
    <AuthProvider>
        <div className="App bg-slate-200">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/special" element={<Special />} />
            <Route path="/banda" element={<Products pageName="Banda"/>}>
              <Route path=':bandId' element={<Products pageName="Banda"/>}/>
            </Route>

            <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path="/login" element={<LoginSignup/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route 
              path="/adminPage"             
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              }
            />
            <Route path="/cart" element={
                <Cart />
            }/>

            {/*adicionar mais categorias*/}
            <Route exact path="/banda" element={<Products pageName="Bandas"/>} />
          </Routes>
          <Footer/>
      </div>
    </AuthProvider>
  );
}

export default App;
