import React from 'react';
import PropTypes from 'prop-types';


const Navbar = (props)=>{
    const {branding} = props;
    return (
       <nav className = 'navbar navbar-dark bg-dark mb-3 '>
           <a className='navbar-brand' href="/">{branding}</a>
           <ul className='navbar-nav'>
               <li className='nav-item'>
                   <a className='nav-link' href="/">Home</a>
                   </li>
           </ul>
       </nav>
    )

}

Navbar.defaultProps = {
    branding: 'Contact Manager'
}

Navbar.propTypes = {
    branding: PropTypes.string.isRequired
}
export default Navbar;