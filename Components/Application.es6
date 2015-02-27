/**
 * Created by Stephan on 27.02.2015.
 */

import React from 'react';
import Input from './Input';

let Component = React.createClass({

    propTypes: {
        values: React.PropTypes.object,
        ui: React.PropTypes.object
    },

    componentDidMount: function() {
        this.props.ui.state.allChanges.forEach(_ => this.forceUpdate());
        this.props.values.allChanges.forEach(_ => this.forceUpdate());
    },

    render: function () {
        return React.DOM.div({},
            React.createElement(Input, { value: this.props.ui.state.inputValue }),
            React.DOM.ol({}, this.props.values.map((value, key) => React.DOM.li({key}, value)))
        );
    }
});

export default Component;