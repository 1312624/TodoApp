import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div class="row container">
                <div class="panel panel-default col-md-6">
                    <div class="panel-heading">Category</div>
                    <div class="panel-body">{this.props.category}</div>
                </div>
                <br />
            </div>
        );
    }
}