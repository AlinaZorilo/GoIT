import React, { Component } from 'react';
import Menu from './menu.jsx';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="top">
          <span>MoGo</span>
          <Menu />
        </div>
        <div className="center">
          <h3>Creative Template</h3>
          <h1>
            welcome <br />to mogo
          </h1>
          <div>
            <a className="Button">learn more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
