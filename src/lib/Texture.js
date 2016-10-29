/**
 * The Texture class represents a texture and basic operations on textures like
 * clearing the texture with a solid color or setting single pixels.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-08
 */

'use strict';

import {
    Color
} from './Color.js';

export class Texture {

    constructor() {
        this.texture = new Float64Array(256 * 256 * 4);
    }

    setPixel(x, y, color) {
        x = (x | 0) % 256;
        y = (y | 0) % 256;
        this.texture[(x + (y * 256)) * 4] = color.r;
        this.texture[(x + (y * 256)) * 4 + 1] = color.g;
        this.texture[(x + (y * 256)) * 4 + 2] = color.b;
        this.texture[(x + (y * 256)) * 4 + 3] = color.a;
    }

    getPixel(x, y) {
        x = (x | 0) % 256;
        y = (y | 0) % 256;
        return new Color(this.texture[(x + (y * 256)) * 4],
            this.texture[(x + (y * 256)) * 4 + 1],
            this.texture[(x + (y * 256)) * 4 + 2],
            this.texture[(x + (y * 256)) * 4 + 3]);
    }

    getBilinearFilteredPixel(x, y) {
        let x0 = (x | 0) % 256;
        let x1 = ((x + 1) | 0) % 256;
        let y0 = (y | 0) % 256;
        let y1 = ((y + 1) | 0) % 256;

        let x0y0 = this.getPixel(x0, y0);
        let x1y0 = this.getPixel(x1, y0);
        let x0y1 = this.getPixel(x0, y1);
        let x1y1 = this.getPixel(x1, y1);

        let col1 = x0y0.multiply(1 - (x - Math.floor(x))).add(x1y0.multiply((x - Math.floor(x))));
        let col2 = x0y1.multiply(1 - (x - Math.floor(x))).add(x1y1.multiply((x - Math.floor(x))));
        let col = col1.multiply(1 - (y - Math.floor(y))).add(col2.multiply((y - Math.floor(y))));

        return col;
    }

    fill(color) {
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                this.setPixel(x, y, color);
            }
        }
    }

    getImageData() {
        let imageData = new ImageData(256, 256);
        let data = imageData.data;

        for (let i = 0; i < 256 * 256 * 4; i++) {
            data[i] = this.texture[i] * 255;
        }

        return imageData;
    }

}
