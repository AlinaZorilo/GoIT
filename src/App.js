import React, { Component } from 'react';
import './scss/index.scss';

import Index from './components/header/index.jsx';
import Body from './components/body/body.jsx';
import Footer from './components/footer/footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index />
        <Body />
        <Footer />
      </div>
    );
  }
}
export default App;
