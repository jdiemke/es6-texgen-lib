'use strict';

import {
    AbstractOperator
} from './AbstractOperator.js';
import {
    Color
} from './Color.js';

export class AdjustIntensity extends AbstractOperator {

    constructor() {
        super();
        this.color = new Color(0.3, 0.0, 0.0);
    }

    process() {
        let source = this.parents[0].texture;

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let result = source.getPixel(x, y).add(this.color);
                this.texture.setPixel(x, y, result);
            }
        }
    }

}
