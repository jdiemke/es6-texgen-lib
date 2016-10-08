/**
 * The FillOperator class implements an operator that fills a texture with a
 * solid color.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-08
 */

'use strict';

import {
    AbstractOperator
} from './AbstractOperator.js';

import {
    Color
} from './Color.js';

import {
    OperatorRegistry
} from './OperatorRegistry.js';

export class FillOperator extends AbstractOperator {

    constructor() {
        super();
        this.fillColor = new Color(1, 0, 0);
    }

    static getType() {
        return FillOperator.name;
    }

    process() {
        this.texture.fill(this.fillColor);
    }

    setFillColor(fillColor) {
        this.fillColor = fillColor;
    }

}

// Add to registry
OperatorRegistry.getInstance().register(FillOperator);
