/**
 * Created by Stephan on 27.02.2015.
 */

import Fluss from 'fluss';



class Application extends Fluss.Domain {

    constructor() {
        super();
        this.values = Fluss.Store.array();
    }
}

export const ACTIONS = { NEW_VALUE: null }
Fluss.Actions.enumerate(ACTIONS);

let app;
export function getInstance() {
    if (!app) {
        app = new Application();
        app.wrap(ACTIONS.NEW_VALUE, (newValue) => app.values.push(newValue));
    }
    return app;
}

export function newValue(newValue) {
    app.execute(ACTIONS.NEW_VALUE, newValue);
}
