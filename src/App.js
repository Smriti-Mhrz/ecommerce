import React from 'react'
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from "./pages/HomePage/HomePage"
import Contact from './pages/Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './components/Cart';
// import SignUp from './pages/SignUp';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route exact path='product' element={<OurStore/>}/>
        <Route exact path='product/:id' element={<SingleProduct/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
          
        </Route>               
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

