import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from 'antd/lib/tabs';
const TabPane = Tabs.TabPane;

function onTabChange(key){
      console.log(key);
}

export const BasicTopSideNav = () => <Tabs defaultActiveKey="1" onChange={onTabChange}>
   <TabPane tab="Instructors" key="1"></TabPane>
   <TabPane tab="Class Scheduler" key="2"></TabPane>
   <TabPane tab="Ballroom World" key="3"></TabPane>
</Tabs>
