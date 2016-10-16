'use strict';

import {
    AbstractOperator
} from './AbstractOperator.js';
import {
    Color
} from './Color.js';

export class DistortOperator extends AbstractOperator {

    process() {
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let color2 = this.parents[1].texture.getPixel(x, y);
                let i = color2.r * 20;
                let color1 = this.parents[0].texture.getPixel(x + i, y + i);

                let color = color1;
                this.texture.setPixel(x, y, color);
            }
        }
    }

}
