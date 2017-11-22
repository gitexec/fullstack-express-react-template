import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
const TabPane = Tabs.TabPane;

function onTabChange(key){
      console.log(key);
}

export const BasicFooterNav = () => <Tabs defaultActiveKey="1" onChange={onTabChange}>
   <TabPane tab="About" key="1"></TabPane>
   <TabPane tab="Contact" key="2"></TabPane>
</Tabs>
