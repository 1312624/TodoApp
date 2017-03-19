import React, { Component } from 'react';
import ListItem from './ListItem';
import AddModal from '../Components/AddModal';
import { Link } from 'react-router';
import request from 'superagent';
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
        let self = this;
        request
            .get('http://localhost:3030/api/todo/category')
            .end(function (err, res) {
                self.setState({ listCategory : res.body });
            });
    }

    addCategory(newCategory) {
        this.state.listCategory.push(newCategory);
        this.setState({ listCategory : this.state.listCategory });
        $(`#addCategory`).modal('hide');
    }

    render() {
        return (
            <div class="container">
                <h4>List Categories</h4>
                <button class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#addCategory"
                        style={{marginBottom : '20px'}}>
                        Add Category
                </button>
                <ul>
                    {
                        this.state.listCategory.map(item => {
                            return (
                                <li key={item._id}>
                                    <Link to={`/category/${item._id}`}>
                                        <ListItem category={item.category} id={item._id} />
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>

                 <AddModal idModal="addCategory"
                           header="Add Category"
                           type="category"
                           addNewCategory={this.addCategory} />
            </div>
        );
    }
}