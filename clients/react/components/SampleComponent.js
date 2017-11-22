import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class SampleComponent extends Component {
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
    return (
      <div>
        {this.renderContent()}
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(SampleComponent);
