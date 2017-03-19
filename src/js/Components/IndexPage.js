import React, { Component } from 'react';
import Category from '../Containers/Category';

export default class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <Category />
            </div>
        );
    }
}