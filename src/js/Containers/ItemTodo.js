import React, { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="row">
                <div class="panel panel-default col-md-6">
                    <div class="panel-heading">
                        {this.props.title}
                        <p>{this.props.created_at}</p>
                    </div>
                    <div class="panel-body">{this.props.content}</div>
                </div>
            </div>
        );
    }
}