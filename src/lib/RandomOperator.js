'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class RandomOperator extends AbstractOperator {

    process() {
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let color = new Color(Math.random() * 256 / 255);
                this.texture.setPixel(x, y, color);
            }
        }
    }

}
