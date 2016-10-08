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

export class FillOperator extends AbstractOperator {

    process() {
        this.texture.fill(0, 1, 0, 1);
    }

}
