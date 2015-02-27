/**
 * Created by Stephan on 27.02.2015.
 */

import React from 'react';

let InputComponent = React.createClass({

    propTypes: {
        value: React.PropTypes.any,
        updateInput: React.PropTypes.func,
        submitInput: React.PropTypes.func
    },

    handleChange(event) {
        this.props.updateInput(event.target.value);
    },

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            this.props.submitInput();
        }
    },

    render() {
        return React.DOM.input({ placeholder: "New Value",
                                 value: this.props.value,
                                 onChange: this.handleChange,
                                 onKeyDown: this.handleKeyDown})
    }
});

export default InputComponent;