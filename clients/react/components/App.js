import React, {Component} from 'react';
import { Navbars } from 'react-bootstrap';

import homeIcon from '../assets/images/home.png';
import nature from '../assets/images/nature.jpg';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    // var homeImg = document.getElementById('home');
    // homeImg.src = homeIcon;

    return (
      <div>
        <h1>Hello Dev</h1>
        <div id="home-img">
          <img src={homeIcon}  />
        </div>
        <div className="settingIcon"></div>
        <button type="button" className="btn btn-primary">Primary</button>
        <div id="nature-id">
          <img src={nature} />
        </div>
      </div>
    );
  }
}
