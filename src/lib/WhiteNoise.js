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

export class WhiteNoise extends AbstractOperator {

    constructor() {
        super();
        this.seed = 0;
    }

    process() {
        let rng = new RandomNumberGenerator();
        rng.setSeed(this.seed);

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                this.texture.setPixel(x, y, new Color(rng.getInteger() * 256 / 255));
            }
        }
    }

    setSeed(seed) {
        this.seed = seed;
    }

}
