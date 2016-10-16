/**
 * The Color class represents a RGBA color.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-08
 */

'use strict';

export class Color {

    constructor(r, g = r, b = r, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    add(color) {
        return new Color(this.r + color.r, this.g + color.g, this.b + color.b);
    }

    multiply(scalar) {
        return new Color(this.r * scalar, this.g * scalar, this.b * scalar);
    }

    multiplyColor(color) {
        return new Color(this.r * color.r, this.g * color.g, this.b * color.b);
    }

    substract(color) {
        return new Color(this.r - color.r, this.g - color.g, this.b - color.b);
    }

}
