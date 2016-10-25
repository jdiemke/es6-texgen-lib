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

export class Tile extends AbstractOperator {

    process() {
        let source = this.parents[0].texture;

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let color = source.getPixel(x * 2 - 0.5, y * 2 - 0.5);
                this.texture.setPixel(x, y, color);
            }
        }
    }

    isInputAccepted() {
        return this.parents.length == 1;
    }

    setSeed(seed) {
        this.seed = seed;
    }

}
