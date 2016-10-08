'use strict';

import {
    AbstractOperator
} from './AbstractOperator.js';

import {
    Color
} from './Color.js';

import {
    OperatorRegistry
} from './OperatorRegistry.js';

export class AddOperator extends AbstractOperator {

    constructor() {
        super();
    }

    static getType() {
        return AddOperator.name;
    }

    process() {
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let color1 = this.parents[0].texture.getPixel(x, y);
                let color2 = this.parents[1].texture.getPixel(x, y);
                let color = color1.add(color2).multiply(0.5);
                this.texture.setPixel(x, y, color);
            }
        }
    }

}
