'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class Pixelize extends AbstractOperator {

    constructor() {
        super();
        this.scale = 3;
    }

    isInputAccepted() {
        return this.parents.length == 1;
    }

    process() {
        let source = this.parents[0].texture;

        let scale = Math.pow(2, this.scale);

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let u = Math.floor(x / scale) * scale + scale / 2;
                let v = Math.floor(y / scale) * scale + scale / 2;
                let color = source.getPixel(u, v);
                this.texture.setPixel(x, y, color);
            }
        }
    }

}
