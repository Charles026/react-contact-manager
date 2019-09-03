import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const {brand} = this.props;
        return (
            <div className = 'navbar navbar-dark bg-primary mb-4'>
                <div className="container">
                <a href="/" className = 'navbar-brand text-gray-200'>{brand}</a>
                </div>
                
            </div>
        )
    }
}

export default Navbar;