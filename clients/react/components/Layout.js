import React, { Component } from 'react';
import { Header } from './Header';

export class Layout extends Component {
    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='row'>
                    <Header />
                </div>
                <div className='row'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
}
