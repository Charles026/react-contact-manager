import React, { Component, Fragment } from 'react';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';



 class App extends Component {
  render() {
    
    return (
      <div >
        <Navbar brand= 'contact manager'/>
        <Welcome name = 'Elen' />
        <Welcome name = 'Mike' />
        <Welcome name = 'Kaiser' />
      </div>
    )
  }
}

export default App;