/**
 * The Application class is used as an entry point for this ECMAScript 6
 * application and mimics the Java programming language behavior.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-07
 */

'use strict';

import * as tg from './lib/es6-texgen-lib.js';

class Application {

    main() {
        this.createAndShowCanvas();
        this.logLibraryNameAndVersion()
    }

    createAndShowCanvas() {
        let operator = new tg.FillOperator();
        operator.setFillColor(new tg.Color(0.8, 1.0, 0.8));
        operator.evaluate();

        let canvas = new tg.Canvas(256, 256);
        canvas.putImageData(operator.getTexture().getImageData());
        canvas.appendToHtmlDom();

        let operator2 = new tg.SinePlasmaOperator();
        operator2.setColor(new tg.Color(1.0, 0.4, 0.8));
        operator2.evaluate();

        let canvas2 = new tg.Canvas(256, 256);
        canvas2.putImageData(operator2.getTexture().getImageData());
        canvas2.appendToHtmlDom();
    }

    logLibraryNameAndVersion() {
        console.log('name      : ' + tg.distribution.baseName);
        console.log('version   : ' + tg.distribution.version);
        console.log('full name : ' + tg.distribution.fullName);
    }

}

// Run the application
new Application().main();
