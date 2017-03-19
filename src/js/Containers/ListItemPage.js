import React, { Component } from 'react';
import Item from '../Containers/ItemTodo';
import AddModal from '../Components/AddModal';
import request from 'superagent';
import { autobind } from 'core-decorators';

@autobind
export default class ListItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
        }
    }

    componentWillMount() {
        let self = this;
        request
            .get('http://localhost:3030/api/todo/item')
            .query({ categoryID : self.props.params.categoryID })
            .end((err, res) => {
                self.setState({ listItem : res.body });
            });
    }

    addItem(item) {
        this.state.listItem.push(item);
        this.setState({ listItem: this.state.listItem });
        $('#addTodo').modal('hide');
    }

    render() {

        return (
            <div class="container">
                <button class="btn btn-primary" data-toggle="modal" data-target="#addTodo">Add Item</button>
                <br /><br />
                <ul>
                    {
                        this.state.listItem.map(item => {
                            return (
                                <li key={Math.random()}>
                                    <Item title={item.title} content={item.content} created_at = {item.created_at} />
                                </li>
                            );
                        })
                    }
                </ul>

                <AddModal idModal="addTodo"
                          header="Add New Item"
                          type="todo"
                          category={this.props.params.categoryID}
                          addNewItem={this.addItem} />

            </div>
        );
    }
}