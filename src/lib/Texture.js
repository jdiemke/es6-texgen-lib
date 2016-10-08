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
        this.texture = new Float32Array(256 * 256 * 4);
    }

    setPixel(x, y, color) {
        this.texture[(x + (y * 256)) * 4] = color.r;
        this.texture[(x + (y * 256)) * 4 + 1] = color.g;
        this.texture[(x + (y * 256)) * 4 + 2] = color.b;
        this.texture[(x + (y * 256)) * 4 + 3] = color.a;
    }

    getPixel(x, y) {
        return new Color(this.texture[(x + (y * 256)) * 4],
            this.texture[(x + (y * 256)) * 4 + 1],
            this.texture[(x + (y * 256)) * 4 + 2],
            this.texture[(x + (y * 256)) * 4 + 3]);
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
