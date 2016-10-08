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
        let texture = new tg.Texture();
        texture.fill(1, 0.25, 1, 1);

        let canvas = new tg.Canvas(256, 256);
        canvas.putImageData(texture.getImageData());
        canvas.appendToHtmlDom();
    }

    logLibraryNameAndVersion() {
        console.log('name      : ' + tg.distribution.baseName);
        console.log('version   : ' + tg.distribution.version);
        console.log('full name : ' + tg.distribution.fullName);
    }

}

// Run the application
new Application().main();
