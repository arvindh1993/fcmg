import React from 'react';

import './App.css';
import {
    MDBAlert
} from "mdbreact";

export default class AppSubFolder extends React.Component {
    constructor(props) {
        super()

    }

    render() {
        return (

            <div>
                <MDBAlert
                    group
                    type="text"
                    value={this.props.value}
                > {this.props.value}</MDBAlert>
            </div>

        );
    }
}
