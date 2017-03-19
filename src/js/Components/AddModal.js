import React, { Component } from 'react';
import request from 'superagent';
import { autobind } from 'core-decorators';

@autobind
export default class AddModal extends Component {

    onItemAdded() {
        if (this.props.type === 'category')
            this.onCategoryAdded();
        else
            this.onTodoAdded();
    }

    onCategoryAdded() {
        let self = this;
        request
            .post('http://localhost:3030/api/todo/category')
            .send({ category: self.refs.inputContent.value })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                self.props.addNewCategory(res.body);
            });
    }

    onTodoAdded() {
        let self = this;
        request
            .post('http://localhost:3030/api/todo/item')
            .send({ 
                title: self.refs.inputTitle.value,
                content: self.refs.inputContent.value,
                categoryID: self.props.category
            })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                let date = new Date(res.body.created_at);
                let created_at = date.toLocaleDateString() + ' - ' + date.toLocaleTimeString();
                self.props.addNewItem({...res.body, created_at});
            });
    }


    render() {
        return (
            <div id={this.props.idModal} class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">{this.props.header}</h4>
                        </div>
                        <div class="modal-body">
                            <input ref="inputTitle" type="text" placeholder="Title" />
                            <br /><br />
                            <input ref="inputContent" type="text" placeholder="Content" />
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" onClick={this.onItemAdded}>Save</button>
                            <button class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}