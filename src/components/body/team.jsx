import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default class Team extends Component {
  render() {
    return (
      <div className="center">
        <div className="person">
          <div className="photo">
            <img
              srcset="http://127.0.0.1:8887/src/img/man1.png 2x"
              src="http://127.0.0.1:8887/src/img/man1.png"
              alt=""
            />
            <div className="social">
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
            </div>
          </div>
          <div className="name">
            <span>Matthew Dix</span>
            <span>Graphic Design</span>
          </div>
        </div>
        <div className="person">
          <div className="photo">
            <img
              srcset="http://127.0.0.1:8887/src/img/man2.png 2x"
              src="http://127.0.0.1:8887/src/img/man2.png"
              alt=""
            />
            <div className="social">
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
            </div>
          </div>
          <div className="name">
            <span>Christopher Campbell</span>
            <span>Branding/UX design</span>
          </div>
        </div>
        <div className="person">
          <div className="photo">
            <img
              srcset="http://127.0.0.1:8887/src/img/man3.png 2x"
              src="http://127.0.0.1:8887/src/img/man3.png"
              alt=""
            />
            <div className="social">
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon="clock" />
              </div>
            </div>
          </div>
          <div className="name">
            <span>Michael Fertig</span>
            <span>Developer</span>
          </div>
        </div>
      </div>
    );
  }
}

library.add(faClock);
