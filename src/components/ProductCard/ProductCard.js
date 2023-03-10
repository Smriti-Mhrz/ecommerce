import React from 'react'
import './ProductCard.scss'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const {grid} =props;
  let location = useLocation();
  
  return (
    <>
      <div className={` ${location.pathname == '/store'? `gr-${grid}`:'col-3'}`}>
      <Link to={`${location.pathname == '/'? "product/:id":location.pathname == '/product/:id'?'product':':id'}`} className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link><img src='image/wish.svg' alt='wishlist'/></Link>
        </div>
        <div className='product-image'>
            <img src='image/digitalwatch.jpg' className='img-fluid' alt='product image'/>
            {/* <img src='image/digitalwatch2.jpg' className='img-fluid' alt='product image'/> */}

        </div>
        <div className='product-details'>
            <h6 className='brand'>HaveIs</h6>
            <h5 className='product-title'>HeadPhone Headphone bulk 10 packed multi-colored</h5> 
            <ReactStars
                count={5}                 
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ?'d-block': 'd-none'}`}>ghzdj vjhfg shgzs gjdsg djgufrsd gdshgdn gvjhfgdn fgjdfg ndfgjfdg dfgjdfgd fdbdfjgdnfg dfjdgdmfzg izdgjzdg jhzd</p>
            <p className='price'>$150</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <Link><img src='image/add-cart.svg' alt='addcart'/></Link>
                <Link><img src='image/view.svg' alt='addcart'/></Link>

            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == '/store'? `gr-${grid}`:'col-3'}`}>
      <Link to={`${location.pathname == '/'? "product/:id":location.pathname == '/product/:id'?'product':':id'}`} className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link><img src='image/wish.svg' alt='wishlist'/></Link>
        </div>
        <div className='product-image'>
            <img src='image/laptop.jpg' className='img-fluid' alt='product image'/>
            {/* <img src='image/digitalwatch2.jpg' className='img-fluid' alt='product image'/> */}

        </div>
        <div className='product-details'>
            <h6 className='brand'>HaveIs</h6>
            <h5 className='product-title'>HeadPhone Headphone bulk 10 packed multi-colored</h5> 
            <ReactStars
                count={5}                 
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ?'d-block': 'd-none'}`}>ghzdj vjhfg shgzs gjdsg djgufrsd gdshgdn gvjhfgdn fgjdfg ndfgjfdg dfgjdfgd fdbdfjgdnfg dfjdgdmfzg izdgjzdg jhzdfjg zdfgjdfhgzdjkzbz  </p>
            <p className='price'>$150</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <Link><img src='image/add-cart.svg' alt='addcart'/></Link>
                <Link><img src='image/view.svg' alt='addcart'/></Link>

            </div>
        </div>
      </Link>
    </div>
    </>
  );
}

export default ProductCard
