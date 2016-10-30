'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class Grayscale extends AbstractOperator {

    isInputAccepted() {
        return this.parents.length == 1;
    }

    process() {
        let source = this.parents[0].texture;

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let weight = new Color(0.3, 0.59, 0.11);
                let weightedColor = source.getPixel(x, y).multiplyColor(weight);
                let intensity = weightedColor.r + weightedColor.g + weightedColor.b;
                this.texture.setPixel(x, y, new Color(intensity));
            }
        }
    }

}
