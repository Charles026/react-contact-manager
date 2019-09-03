import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList'

class App extends Component {
  render() {

    return (
      <Fragment >
        <Navbar brand='contact manager' />
        <ContactList />
      </Fragment>
    )
  }
}

export default App;