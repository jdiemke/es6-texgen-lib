/**
 * The Turbolence class implements an operator that distorts a texture based
 * on trigonometroc functions.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-26
 */

'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class Turbolence extends AbstractOperator {

    constructor() {
        super();
        this.color = new Color(1, 0, 0);
        this.sinePeriods = 3;
        this.cosinePeriods = 3;
    }

    isInputAccepted() {
        return this.parents.length == 1;
    }

    process() {
        let source = this.parents[0].texture;
        let xscale = 2;
        let yscale = 1;

        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                let xdisplace = (((Math.cos(2 * Math.PI * x / 256. * xscale)) * (Math.sin(x * 2 * Math.PI / 256. * yscale))) * 16.);
                let ydisplace = (((Math.cos(2 * Math.PI * y / 256. * xscale)) * (Math.sin(y * 2 * Math.PI / 256. * yscale))) * 16.);

                let u = (x + xdisplace);
                let v = (y + ydisplace);

                let filteredTexel = source.getBilinearFilteredPixel(u, v);
                this.texture.setPixel(x, y, filteredTexel);
            }
        }
    }

    setColor(color) {
        this.color = color;
    }

}
