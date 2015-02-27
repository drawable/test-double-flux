/**
 * Created by Stephan on 27.02.2015.
 */

import Fluss from 'fluss';
import * as Application from './Application';

let ACTIONS = {UPDATE_INPUT:null, SUBMIT_INPUT: null};
Fluss.Actions.enumerate(ACTIONS);

class UI extends Fluss.Domain {

    constructor() {
        super();
        this.state = Fluss.Store.record({
            inputValue: ""
        })
    }
}

let ui;

export function getInstance() {
    if (!ui) {
        ui = new UI();
        ui.wrap(ACTIONS.UPDATE_INPUT,
            (newValue) => ui.state.inputValue = newValue);

        ui.wrap(ACTIONS.SUBMIT_INPUT, () => {
            Application.newValue(ui.state.inputValue);
            ui.state.inputValue = "";
        });
    }
    return ui;
}

export function updateInput(newValue) {
    ui.execute(ACTIONS.UPDATE_INPUT, newValue);
}

export function submitInput() {
    ui.execute(ACTIONS.SUBMIT_INPUT);
}