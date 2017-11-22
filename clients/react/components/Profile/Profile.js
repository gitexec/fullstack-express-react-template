import React, { Component } from 'react';
import Card from 'antd/lib/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import styles from './Profile.less';

export class Profile extends Component {
  render(){
    debugger
    return(
    <Card title="Ins Name" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className={ styles.profile-custom-image }>
        <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </div>
      <div className={ styles.profile-custom-card-p }>
        <h3>Europe Street beat</h3>
        <p>www.instagram.com</p>
      </div>
    </Card>
    );
  }
}
