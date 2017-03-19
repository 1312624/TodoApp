import React, { Component } from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router';
import { autobind } from 'core-decorators';

@autobind
export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCategory: []
        }
    }

    componentWillMount() {
    }

    addCatagory() {
        this.setState({ listCategory: [{ id: 'todo', 'category': 'Do In Today' }] });
    }

    render() {
        return (
            <div class="container">
                <h4>List Categories</h4>
                <button class="btn btn-primary" onClick={this.addCatagory}>Add Category</button>
                <br />
                <ul>
                    {
                        this.state.listCategory.map(item => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/category/${item.id}`}>
                                        <ListItem category={item.category} id={item.id} />
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}