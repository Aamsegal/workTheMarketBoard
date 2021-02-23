import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import MainApp from './MainApp/MainApp';

class App extends Component {

  render() {

    return (

      <div className='application'>

        <Navbar />

        <MainApp />
      </div>

    )

  }
}

export default App;