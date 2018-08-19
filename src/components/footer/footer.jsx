import React, { Component } from 'react';
import Form from './form.jsx';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="in-footer">
          <span>
            &#169; 2016 MoGo free PSD template by <a>Laaqiq</a>
          </span>
          <Form />
        </div>
      </footer>
    );
  }
}

export default Footer;
