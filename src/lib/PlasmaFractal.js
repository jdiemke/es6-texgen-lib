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

export class PlasmaFractal extends AbstractOperator {

    constructor() {
        super();
        this.displacement = 0.4;
        this.seed = 255;
        this.roughness = 240;
    }

    process() {
        this.rng = new RandomNumberGenerator();
        this.rng.setSeed(this.seed);

        let p1 = 0.5;
        this.texture.setPixel(0, 0, new Color(p1));
        this.fractalPlasma(0, 0, 256, 256, 256);
    }

    fractalPlasma(x1, y1, x2, y2, magnitude) {

        let cx = (x1 + x2) / 2;
        let cy = (y1 + y2) / 2;

        if (x2 - x1 == 1) {
            return;
        }

        let p1 = this.texture.getPixel(x1 & 0xff, y1 & 0xff).r;
        let p2 = this.texture.getPixel(x2 & 0xff, y1 & 0xff).r;
        let p3 = this.texture.getPixel(x1 & 0xff, y2 & 0xff).r;
        let p4 = this.texture.getPixel(x2 & 0xff, y2 & 0xff).r;

        let mymagnitude = magnitude;

        let displacement = ((-(mymagnitude / 2.) * (this.displacement / 256.)) +
            (this.displacement / 255.) * magnitude * this.rng.getInteger());
        magnitude = (mymagnitude * (this.roughness / 255.));

        let center = ((p1 + p2 + p3 + p4) / 4. + displacement);
        center = Math.min(Math.max(center, 0), 1);
        this.texture.setPixel(cx & 0xff, cy & 0xff, new Color(center));

        let top = ((p1 + p2) / 2);
        top = Math.min(Math.max(top, 0), 1);
        this.texture.setPixel(cx & 0xff, y1 & 0xff, new Color(top));

        let left = ((p1 + p3) / 2);
        left = Math.min(Math.max(left, 0), 1);
        this.texture.setPixel(x1 & 0xff, cy & 0xff, new Color(left));

        let right = ((p2 + p4) / 2);
        right = Math.min(Math.max(right, 0), 1);
        this.texture.setPixel(x2 & 0xff, cy & 0xff, new Color(right));

        let bottom = ((p3 + p4) / 2);
        bottom = Math.min(Math.max(bottom, 0), 1);
        this.texture.setPixel(cx & 0xff, y2 & 0xff, new Color(bottom));

        this.fractalPlasma(x1, y1, cx, cy, magnitude);
        this.fractalPlasma(cx, y1, x2, cy, magnitude);
        this.fractalPlasma(x1, cy, cx, y2, magnitude);
        this.fractalPlasma(cx, cy, x2, y2, magnitude);
    }

    setSeed(seed) {
        this.seed = seed;
    }

}
