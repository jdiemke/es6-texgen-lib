/**
 *
 */

'use strict';

export class Texture {

    constructor() {
        this.texture = new Float32Array(256 * 256 * 4);
    }

    setPixel(x, y, r, g, b, a) {
        this.texture[(x + (y * 256)) * 4] = r;
        this.texture[(x + (y * 256)) * 4 + 1] = g;
        this.texture[(x + (y * 256)) * 4 + 2] = b;
        this.texture[(x + (y * 256)) * 4 + 3] = a;
    }

    fill(r, g, b, a) {
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                this.setPixel(x, y, r, g, b, a);
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
