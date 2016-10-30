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
    version: '0.1.1',
    fullName: 'es6-texgen-lib-v0.1.1'
};

export {Texture}
from './Texture.js';

export {Canvas}
from './Canvas.js';

export {FillOperator}
from './FillOperator.js';

export {Color}
from './Color.js';

export {SinePlasmaOperator}
from './SinePlasmaOperator.js';

export {OperatorRegistry}
from './OperatorRegistry.js';

export {ColorizeOperator}
from './ColorizeOperator.js';

export {DistortOperator}
from './DistortOperator.js';

export {PlasmaFractal}
from './PlasmaFractal.js';

export {Turbolence}
from './Turbolence.js';

export {Tile}
from './Tile.js';

export {AdjustIntensity}
from './AdjustIntensity.js';

export {AlphaBlend}
from './AlphaBlend.js';

export {Chrome}
from './Chrome.js';

export {AddOperator}
from './AddOperator.js';

export {LogicalOperator}
from './LogicalOperator.js';

export {WhiteNoise}
from './WhiteNoise.js';

export {AbstractOperator}
from './AbstractOperator.js';

export {CellOperator}
from './CellOperator.js';

export {Metric}
from './Metric.js';

export {Grayscale}
from './Grayscale.js';

export {Pixelize}
from './Pixelize.js';

export {Invert}
from './Invert.js';

export {Ripple}
from './Ripple.js';
