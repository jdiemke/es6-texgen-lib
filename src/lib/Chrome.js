'use strict';

import {
    AbstractOperator
} from './AbstractOperator.js';
import {
    Color
} from './Color.js';

export class Chrome extends AbstractOperator {

    constructor() {
        super();
        this.scale = 110;
    }

    isInputAccepted() {
        return this.parents.length == 1;
    }

    process() {
        let source1 = this.parents[0].texture;
        let number = this.scale / 255.0 * 5;
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let color = source1.getPixel(x, y);
                let result = Math.abs(Math.sin(2.0 * Math.PI * color.r * number));
                let result2 = Math.abs(Math.sin(2.0 * Math.PI * color.g * number));
                let result3 = Math.abs(Math.sin(2.0 * Math.PI * color.b * number));
                this.texture.setPixel(x, y, new Color(result, result2, result3));
            }
        }
    }

}
