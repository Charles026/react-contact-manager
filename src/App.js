import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';




 class App extends Component {
  render() {
    
    return (
      <Fragment >
        <Navbar branding= 'contact manager'/>
        <Contact />
      </Fragment>
    )
  }
}

export default App;