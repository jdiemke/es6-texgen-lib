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
        // Create a canvas
        let canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;

        // Obtain a rendering context and fill the canvas with black color
        let context = canvas.getContext('2d');
        context.fillRect(0, 0, 256, 256);

        // Add the canvas to the html DOM
        document.body.appendChild(canvas);
    }

    logLibraryNameAndVersion() {
        console.log('name      : ' + tg.distribution.baseName);
        console.log('version   : ' + tg.distribution.version);
        console.log('full name : ' + tg.distribution.fullName);
    }

}

// Run the application
new Application().main();
