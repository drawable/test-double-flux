/**
 * Created by Stephan on 27.02.2015.
 */

import React from 'react';

import * as UI from '../UI';

let Component = React.createClass({

    handleChange: function(event) {
        UI.updateInput(event.target.value);
    },

    handleKeyDown: function(event) {
        if (event.keyCode === 13) {
            UI.submitInput();
        }
    },

    render: function() {
        return React.DOM.input({ placeholder: "New Value",
                                 value: this.props.value,
                                 onChange: this.handleChange,
                                 onKeyDown: this.handleKeyDown})
    }
});

export default Component;