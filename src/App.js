import React, { Component } from 'react';

import Navbar from './WTMB-Navbar/WTMB-Navbar';
import MainApp from './WTMB-MainApp/MainApp';

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