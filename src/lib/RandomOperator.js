'use strict';

import {
    AbstractOperator
} from './AbstractOperator.js';
import {
    Color
} from './Color.js';

import {
    RandomNumberGenerator
} from './RandomNumberGenerator.js';

export class RandomOperator extends AbstractOperator {

    process() {
        let rng = new RandomNumberGenerator();
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let color = new Color(rng.getInteger() * 256 / 255);
                this.texture.setPixel(x, y, color);
            }
        }
    }

}
