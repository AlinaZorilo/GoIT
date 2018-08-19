import React, { Component } from 'react';
import Team from './team.jsx';

export default class Section extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="top">
            <h3>Who we are</h3>
            <h1>meet our team</h1>
            <div className="border" />
            <span className="description">
              Lorem ipsum sagittis commodo rutrum diam molestie&nbsp;&mdash;
              risus auctor porttitor gravida. Vitae auctor eros ut auctor amet
              sodales, duis odio, eu congue commodo orci: quisque auctor et nec
              eget morbi ultricies bibendum, duis.
            </span>
          </div>
          <Team />
        </div>
      </section>
    );
  }
}
