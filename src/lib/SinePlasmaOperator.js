/**
 * The SinePlasmaOperator class implements an operator that fills a texture with
 * a sine pattern.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-08
 */

'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class SinePlasmaOperator extends AbstractOperator {

    constructor() {
        super();
        this.color = new Color(1, 0, 0);
        this.sinePeriods = 3;
        this.cosinePeriods = 3;
    }

    process() {
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let f = (Math.sin(2.0 * Math.PI / 256 * x * this.sinePeriods) + Math.cos(2.0 * Math.PI / 256 * y * this.cosinePeriods) + 2) / 4.0;

                this.texture.setPixel(x, y, new Color(f * this.color.r, f * this.color.g, f * this.color.b));
            }
        }
    }

    setColor(color) {
        this.color = color;
    }

}
