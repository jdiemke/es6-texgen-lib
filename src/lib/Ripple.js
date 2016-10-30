'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class Ripple extends AbstractOperator {

    constructor() {
        super();
        this.periods = {
            x: 1,
            y: 1
        };
        this.amplitude = {
            x: 64,
            y: 64
        };
    }

    isInputAccepted() {
        return this.parents.length == 1;
    }

    process() {
        let source = this.parents[0].texture;

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let u = x + this.amplitude.x * Math.sin(2 * Math.PI * y / 256 * this.periods.x);
                let v = y + this.amplitude.y * Math.sin(2 * Math.PI * x / 256 * this.periods.y);
                let color = source.getBilinearFilteredPixel(u, v);
                this.texture.setPixel(x, y, color);
            }
        }
    }

}
