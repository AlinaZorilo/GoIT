import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>
          <a className="active">about</a>
          <a href="">service</a>
          <a href="">work</a>
          <a href="">blog</a>
          <a href="">contact</a>
          <FontAwesomeIcon icon="shopping-cart" />
          <FontAwesomeIcon icon="search" />
        </nav>
      </div>
    );
  }
}

export default Menu;
library.add(faSearch);
library.add(faShoppingCart);
