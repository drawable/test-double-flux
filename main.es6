/**
 * Created by Stephan on 27.02.2015.
 */

import React from 'react';

import * as Application from './Application';
import * as UI from './UI';

import ready from 'domready';
import AppComponent from './Components/Application';

ready(() => {

    var app = Application.getInstance();
    var ui = UI.getInstance();

    React.render(React.createElement(AppComponent, { ui, values: app.values.immutable }),
                 document.getElementById("application")
    );
});