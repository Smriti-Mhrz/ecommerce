import React from 'react'
import './HomePage.scss'
import Meta from '../../components/Meta'
import { Link } from 'react-router-dom'
import BlogCard from '../../components/BlogCard/BlogCard'
import ProductCard from '../../components/ProductCard/ProductCard'

const HomePage = () => {
  return (
    <>
    <Meta title={'TechnoTops'}/>

    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner p-3 position-relative'>
              <img src='image/mainwalabanner.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='main-banner-content position-absolute'>
                <h4>BlueTooth Connection</h4>
                <h5>Super Comfy</h5>
                <p>From $100 or $10/mo.</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content align-items-center'>
            <div className='small-banner position-relative'>
              <img src='image/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>Best Sale</h4>
                <h5>Super Comfy</h5>
                <p>From $100 <br/>or $10/mo.</p>
              </div>
            </div>
            <div className='small-banner  position-relative'>
              <img src='image/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>New Arrival</h4>
                <h5>Buy Ipad Air</h5>
                <p>From $100 <br/>or $10/mo.</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src='image/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>New Arrival</h4>
                <h5>Buy Ipad Air</h5>
                <p>From $100 <br />or $10/mo.</p>
              </div>
            </div>
            <div className='small-banner  position-relative'>
              <img src='image/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>New Arrival</h4>
                <h5>Buy Ipad Air</h5>
                <p>From $100 <br />or $10/mo.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-item-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='image/service.png' alt='services'/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders $5</p>
                  </div>
                </div>
                
                  <div className='d-flex align-items-center gap-15 '>
                  <img src='image/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                  <div className='d-flex align-items-center gap-15'>
                  <img src='image/service-03.png' alt='services'/>
                <div>
                    <h6>Support 24/7</h6>  
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                  <div className='d-flex align-items-center gap-15'>
                  <img src='image/service-05.png' alt='services'/>
                <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
            <ProductCard img="image/tablet.jpg"/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
         </div>
      </div>
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>

        </div>
      </div>
    </section>
    </>
  )
}

export default HomePage

