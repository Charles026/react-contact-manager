import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList'




 class App extends Component {
  render() {
    
    return (
      <div >
        <Navbar brand= 'contact manager'/>
        <ContactList />
      </div>
    )
  }
}

export default App;