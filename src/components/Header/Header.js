import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom';
import {BsSearch,BsMenuUp, BsFillCartFill} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (  
    <> 
      {/* <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-end mb-0'>Free Shipping</p>
            </div>
            <div className='col-6'>
            <p className='text-end mb-0'>Hotline</p>
            </div>
          </div>
        </div>
      </header> */}
      <header className='header-upper py-2'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link to='/' className='title'>TechTops</Link>
                </h2>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input type='text' className='form-control py-2' placeholder='Search your preferred products' aria-describedby='basic-addon2'/>
                <span className='input-group-text' id="basic-addon2"><BsSearch /></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper d-flex align-item-center two-item'>
               <div>
                  <Link to='/cart' className='d-flex align-items-center gap-10 text-black'>
                    <BsFillCartFill className='cart'/>
                 {/* <img src ='image/cart.svg' alt='cart'/> */}
                  <p className='mb-0 cart'>Cart
                   </p>
                  </Link>
                </div>
                <div>
                  <a className='d-flex align-items-center gap-10 text-black'>
                    <BiLogOut className='logout'/>
                  {/* <img src ='image/cart.svg' alt=''/> */}
                  <p className='mb-0 logout'>Logout
                   </p>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
      <header className='header-bottom py-2'>
        <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='menu-bottom d-flex align-item-center gap-30'>
                  <div>                    
                  <div class="dropdown">
                      <button className="btn btn-secondary dropdown-toggle border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <BsMenuUp/>Shop Categories
                      </button>
                      <ul class="dropdown-menu">
                        <li><Link className="dropdown-item text-black" to="/">Laptops</Link></li>
                        <li><Link className="dropdown-item text-black" to="/">Digital Watch</Link></li>
                        <li><Link className="dropdown-item text-black" to="/">Smart Phones</Link></li>
                      </ul>
                  </div>
                  </div>
                  <div className='menu-links'>
                    <div className='d-flex algn-items-center gap-30'>
                      <NavLink to='/'className='home'>Home</NavLink>
                      <NavLink to='/product' className='store'>Our Store</NavLink>
                      <NavLink to='/contact' className='contact'>Contact</NavLink>
                      <NavLink to='/' className='blog'>Blog</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </header>
    </>
                  
  )
}
export default Header;
