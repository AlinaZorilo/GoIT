import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

class Service extends Component {
  render() {
    return (
      <div className="center">
        <div className="block">
          <FontAwesomeIcon icon="clock" />
          <div className="right">
            <h5>photography</h5>
            <span>
              Lorem ipsum dolor sit amet_ consectetur adipiscing elit_ sed do
              eiusmod tempor.
            </span>
          </div>
        </div>
        <div className="block">
          <FontAwesomeIcon icon="chart-line" />
          <div className="right">
            <h5>web design</h5>
            <span>
              Lorem ipsum dolor sit amet_ consectetur adipiscing elit_ sed do
              eiusmod tempor.
            </span>
          </div>
        </div>
        <div className="block">
          <FontAwesomeIcon icon="shopping-cart" />
          <div className="right">
            <h5>Creativity</h5>
            <span>
              Lorem ipsum dolor sit amet_ consectetur adipiscing elit_ sed do
              eiusmod tempor.
            </span>
          </div>
        </div>
        <div className="block">
          <FontAwesomeIcon icon="shopping-cart" />
          <div className="right">
            <h5>seo</h5>
            <span>
              Lorem ipsum dolor sit amet_ consectetur adipiscing elit_ sed do
              eiusmod tempor.
            </span>
          </div>
        </div>
        <div className="block">
          <FontAwesomeIcon icon="shopping-cart" />
          <div className="right">
            <h5>Css/Html</h5>
            <span>
              Lorem ipsum dolor sit amet_ consectetur adipiscing elit_ sed do
              eiusmod tempor.
            </span>
          </div>
        </div>
        <div className="block">
          <FontAwesomeIcon icon="shopping-cart" />
          <div className="right">
            <h5>digital</h5>
            <span>
              Lorem ipsum dolor sit amet_ consectetur adipiscing elit_ sed do
              eiusmod tempor.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
library.add(faShoppingCart);
library.add(faClock);
library.add(faChartLine);
