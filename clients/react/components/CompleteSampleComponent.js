import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Layout from 'antd/lib/layout';
const { Header, Footer, Sider, Content } = Layout;

import homeIcon from '../assets/images/home.png';
import nature from '../assets/images/nature.jpg';

import { BasicTopSideNav, BasicFooterNav } from './Navigation/index';
class EntryComponent extends Component {
  constructor(props){
    super(props);
    this.onTabChange = this.onTabChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser();
  }

  onTabChange(key){
      console.log(key);
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
        <Layout>
            <BasicTopSideNav />
            <Content>Content {this.renderContent()}</Content>
            <BasicFooterNav />
        </Layout>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(EntryComponent);
