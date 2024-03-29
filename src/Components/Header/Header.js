import React from "react";
import './header.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";



const Header = () => {
    const orders = useSelector(state => state.orders)
  return (
    <nav className="navbar fixed-top bg-white">
      <div className="container justify-content-between px-md-0 px-4 align-items-center">
          <Link className="navbar-brand d-flex align-items-top" to='/'>
              <img src='/Assets/images/logo.svg' alt='logo'/>
              <span className='brand-text'>Brand</span>
          </Link>
          <div className='col-6 d-none d-sm-block'>
              <div className='input-group'>
                  <input type='search' className='form-control border-primary' placeholder='Search'
                         aria-label='Search technologies with search' aria-describedby='button-addon'/>
                  <button className='btn btn-primary' type='button'>Search</button>
              </div>
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column'>
              <Link to={'/orders'}>
                  <img src='/Assets/icons/shopping-cart.svg' style={{cursor: "pointer"}} alt='shopping-cart'/>
              </Link>
              <span className='shopping-order'>Orders({orders.length})</span>
          </div>
      </div>
    </nav>
  );
};

export default Header;
