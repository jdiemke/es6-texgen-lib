/**
 * The RandomNumberGenerator generates random numbers.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-16
 */

'use strict';

export class RandomNumberGenerator {

    constructor() {
        this.seed = 6;
    }

    getInteger() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }

    setSeed(seed) {
        this.seed = seed;
    }

}
