import * as APEX from './lib/es6-texgen-lib.js';

export class MyOperator extends APEX.AbstractOperator {

    process() {
        this.texture.fill(new APEX.Color(0.0, 1.0, 0.0));
    }

}
