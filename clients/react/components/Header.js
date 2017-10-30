import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderNavContent(){
      return <li>nav</li>;
    }
    render(){
      <nav>
        <div className="nav-wrapper">
          {/* <Link
            to={'/'}
          >
            Home
          </Link> */}
          <ul>
            {this.renderNavContent}
          </ul>
        </div>
      </nav>
    }
}


// function mapStateToProps({ auth }) {
//   return { auth };
// }
//
// export default connect(mapStateToProps)(Header);
