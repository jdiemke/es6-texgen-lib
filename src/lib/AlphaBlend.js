'use strict';

import {
    AbstractOperator
} from './AbstractOperator.js';
import {
    Color
} from './Color.js';

export class AlphaBlend extends AbstractOperator {

    constructor() {
        super();
        this.alpha = 0.75;
    }

    isInputAccepted() {
        return this.parents.length == 2;
    }

    process() {
        let source1 = this.parents[0].texture;
        let source2 = this.parents[1].texture;

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let color1 = source1.getPixel(x, y);
                let color2 = source2.getPixel(x, y);
                let result = color1.multiply(1.0 - this.alpha).add(color2.multiply(this.alpha));

                this.texture.setPixel(x, y, result);
            }
        }
    }

}
