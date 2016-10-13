/**
 * The Application class is used as an entry point for this ECMAScript 6
 * application and mimics the Java programming language behavior.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-07
 */

'use strict';

import * as tg from './lib/es6-texgen-lib.js';
import * as APEX from './MyOperator.js';

class Application {

    main() {
        this.createAndShowCanvas();
        this.logLibraryNameAndVersion()
        this.logOperatorRegistry();
    }

    createAndShowCanvas() {
        let operator = new tg.FillOperator();
        operator.setFillColor(new tg.Color(0.4, 0.5, 0.6));
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

        let operator3 = new tg.AddOperator();
        operator3.addParent(operator);
        operator3.addParent(operator2);
        operator3.evaluate();

        let canvas3 = new tg.Canvas(256, 256);
        canvas3.putImageData(operator3.getTexture().getImageData());
        canvas3.appendToHtmlDom();

        let operator4 = new tg.RandomOperator();
        operator4.evaluate();

        let canvas4 = new tg.Canvas(256, 256);
        canvas4.putImageData(operator4.getTexture().getImageData());
        canvas4.appendToHtmlDom();

        let operator5 = new tg.LogicalOperator();
        operator5.evaluate();

        let canvas5 = new tg.Canvas(256, 256);
        canvas5.putImageData(operator5.getTexture().getImageData());
        canvas5.appendToHtmlDom();

        let operator6 = new APEX.MyOperator();
        operator6.evaluate();

        let canvas6 = new tg.Canvas(256, 256);
        canvas6.putImageData(operator6.getTexture().getImageData());
        canvas6.appendToHtmlDom();

        let operator7 = new tg.CellOperator();
        operator7.evaluate();

        let canvas7 = new tg.Canvas(256, 256);
        canvas7.putImageData(operator7.getTexture().getImageData());
        canvas7.appendToHtmlDom();
    }

    logLibraryNameAndVersion() {
        console.log('name      : ' + tg.distribution.baseName);
        console.log('version   : ' + tg.distribution.version);
        console.log('full name : ' + tg.distribution.fullName);
    }

    logOperatorRegistry() {
        let operatorRegistry = tg.OperatorRegistry.getInstance();
        let types = operatorRegistry.getRegisteredTypes().toString()
        console.log('registered types: ' + types);
    }

}

// Run the application
new Application().main();
