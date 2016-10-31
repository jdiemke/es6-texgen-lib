'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class Checker extends AbstractOperator {

    constructor() {
        super();
        this.quantity = 2;
    }

    process() {

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let ss = Math.floor(x / 256 * 2 * this.quantity);
                let tt = Math.floor(y / 256 * 2 * this.quantity);
                let value = ((ss + tt) % 2);
                this.texture.setPixel(x, y, new Color(value));
            }
        }
    }

}
