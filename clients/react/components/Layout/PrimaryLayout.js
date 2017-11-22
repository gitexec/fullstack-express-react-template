import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
const { Content } = Layout;

import { BasicTopSideNav, BasicFooterNav } from './../Navigation';

export class PrimaryLayout extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Layout>
              <BasicTopSideNav />
              <Content>{ this.props.children }</Content>
              <BasicFooterNav />
        </Layout>
      </div>
    );
  }
}
