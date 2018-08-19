import React, { Component } from 'react';
import Service from './service.jsx';

export default class Section extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="top">
            <h3>We work with</h3>
            <h1>amazing services</h1>
            <div className="border" />
          </div>
          <Service />
        </div>
      </section>
    );
  }
}
