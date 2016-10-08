/**
 * This module exports all classes, methods and objects that are necessary in
 * order to work with the texture generator library. Hence it should be
 * sufficient to import only this single module in order to work with the
 * library.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-07
 */

'use strict';

export let distribution = {
    baseName: 'es6-texgen-lib',
    version: '0.1.0',
    fullName: 'es6-texgen-lib-v0.1.0'
};

export {
    Texture
}
from './Texture.js';

export {
    Canvas
}
from './Canvas.js';

export {
    FillOperator
}
from './FillOperator.js';

export {
    Color
}
from './Color.js';

export {
    SinePlasmaOperator
}
from './SinePlasmaOperator.js';
