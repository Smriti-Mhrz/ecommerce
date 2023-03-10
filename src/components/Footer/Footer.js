import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsYoutube,BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    {/* <footer className='py-3'>
    <div className='container.xxl'>
        <div className='row  align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'></div>
          </div>
        </div>
    </div>
    </footer> */}
    <footer className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-3 text-white mb-4'>
            <a href="/contact"><h4>Contact Us</h4></a>
            <div>
              <address className='text-white fs-5'>
                TechTops,<br/> NewRoad, Kathmandu<br/> (opposite to peanuts)
              </address>
              <a href='+977-9862457203 ' className='mt-3 d-block mb-1 text-white'> +977-9862457203 </a>           
              <a href='mailto: smritimaharjan99@gmail.com' className='mt-2 d-block mb-0 text-white'> techtops@gmail.com</a>
              <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href=''>
                  <BsLinkedin className='fs-4'/>
                </a>
                <a className='text-white' href=''>
                  <BsYoutube className='fs-4'/>
                </a>
                <a className='text-white' href=''>
                  <BsGithub className='fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className='col-3 text-white mb-4'>
            <h4>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Smart watches</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Smart Phones</Link>
            </div>
          </div>
          <div className='col-3 text-white mb-4'>
            <h4>Information</h4>
            <div>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms Of Services</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>

            </div>
            </div>
          </div>
          <div>
          <img src='image/newsletter.png' alt='newsletter'/>
          </div>
          <div>
             <div className='col align-item-center text-white mb-4'>
            <h4 className='mb-0 text-white'>Get in touch with us</h4>
            <div className='form-group '>
              <input type='text' className='form-control py-1 mb-3' placeholder='Your Name' />
              <input type='text' className='form-control py-1' placeholder='Your email address' />
            </div>
              <div>
                <button className='button' id='basic-addon2'>Subscribe</button>
                </div>
            <div>
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </footer>
    <footer className='py-4 bottom'>
      <div className='container.xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>@{ new Date().getFullYear()}: Powered by Technical Teams
              </p>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer
