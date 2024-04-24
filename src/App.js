import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import Home from './components/Home/Home.tsx';
import SignUpForm from './components/LognUp/signUp/signUpForm.tsx';
import LoginForm from './components/LognUp/login/loginForm.tsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<SignUpForm/>}/>
      <Route path="/register" element ={<LoginForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
