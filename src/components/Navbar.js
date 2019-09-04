import React from 'react';
import PropTypes from 'prop-types';


const Navbar = (props) => {

    const { branding } = props;

    return (
        <nav className='navbar navbar-dark bg-dark mb-3 '>
            <h1  className='navbar-brand'>{branding}</h1>
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