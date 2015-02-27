/**
 * Created by Stephan on 27.02.2015.
 */

import React from 'react';

import * as Application from './Application';
import * as UI from './UI';

import ready from 'domready';
import CApplication from './Components/Application';

ready(() => {

    var app = Application.getInstance();
    var ui = UI.getInstance();

    React.render(React.createElement(CApplication, { ui, values: app.values.immutable }),
                 document.getElementById("application")
    );
});