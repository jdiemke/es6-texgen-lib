'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class Invert extends AbstractOperator {

    isInputAccepted() {
        return this.parents.length == 1;
    }

    process() {
        let source = this.parents[0].texture;

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let color = source.getPixel(x, y).invert();
                this.texture.setPixel(x, y, color);
            }
        }
    }

}
