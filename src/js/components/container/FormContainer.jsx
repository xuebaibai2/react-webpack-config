import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Input from '../presentational/Input.jsx';

class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        const { title } = this.state;
        return (
            <form id='app-form'>
                <Input
                    type="text"
                    id="app_title"
                    text="APP title"
                    label="app_title"
                    value={title}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}

export default FormContainer;
const wrapper = document.getElementById("create-task-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;