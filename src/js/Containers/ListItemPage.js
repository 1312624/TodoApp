import React, { Component } from 'react';
import Item from '../Containers/ItemTodo';
import Datas from '../../public/data';
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
        const id = this.props.params.categoryID;

        const Item = Datas.filter(data => {
             return data.id === id
        })[0];

        console.log(Item);
    }

    addItem() {
        this.state.listItem.push({ 'title': 'ABC', 'content': 'ABCD' });
        this.setState({ listItem: this.state.listItem });
    }

    render() {

        return (
            <div class="container">
                <button class="btn btn-primary" onClick={this.addItem}>Add Item</button>
                <br />
                <ul>
                    {
                        this.state.listItem.map(item => {
                            return (
                                <li key={Math.random()}>
                                    <Item title={item.title} content={item.content} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}