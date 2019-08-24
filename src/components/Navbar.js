import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const {brand} = this.props;
        return (
            <div className = 'navbar navbar-light bg-light'>
                <a href="/" className = 'navbar-brand'>{brand}</a>
                <ul className = 'navbar-nav'>
                    <li className = 'nav-item'>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;