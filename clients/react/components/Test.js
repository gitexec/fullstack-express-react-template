import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
// import { Navbars } from 'react-bootstrap';
import homeIcon from '../assets/images/home.png';
import nature from '../assets/images/nature.jpg';


class Test extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser();
  }

  renderContent(){
    switch (this.props.users) {
      case null:
        return <div>Loading</div>;
        break;
      default:
       return <div>{this.props.users.name}</div>
    }
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
          { this.renderContent() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(Test);
