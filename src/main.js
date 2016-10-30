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

        let operator4 = new tg.WhiteNoise();
        operator4.setSeed(23);
        operator4.evaluate();

        let canvas4 = new tg.Canvas(256, 256);
        canvas4.putImageData(operator4.getTexture().getImageData());
        canvas4.appendToHtmlDom();

        let operator5 = new tg.LogicalOperator();
        this.displayTexture(operator5);

        let operator6 = new APEX.MyOperator();
        this.displayTexture(operator6);

        let operator7 = new tg.CellOperator();
        this.displayTexture(operator7);

        let operator8 = new tg.DistortOperator();
        operator8.addParent(operator7);
        operator8.addParent(operator2);

        operator7.setLinearCombinationType(1);

        let op9 = new tg.ColorizeOperator();
        op9.addParent(operator8);
        op9.evaluate();

        let op10 = new tg.Tile();
        op10.addParent(operator4);
        let op11 = new tg.ColorizeOperator();
        op11.addParent(op10);
        op11.setBackgroundColor(new tg.Color(1, 1, 0));
        op11.setForgroundColor(new tg.Color(1, 0, 0));
        this.displayTexture(op11);

        let op12 = new tg.Turbolence();
        operator7.setLinearCombinationType(2);
        op12.addParent(operator7);
        this.displayTexture(op12);

        let op13 = new tg.PlasmaFractal();
        let op14 = new tg.ColorizeOperator();
        op14.addParent(op13);
        this.displayTexture(op14);

        let op15 = new tg.AdjustIntensity();
        op15.addParent(op14);
        this.displayTexture(op15);

        let op16 = new tg.AlphaBlend();
        op16.addParent(op14);
        op16.addParent(operator7);
        this.displayTexture(op16);

        let op17 = new tg.Chrome();
        op17.addParent(op16);
        this.displayTexture(op17);

        let op18 = new tg.Grayscale();
        op18.addParent(op17);
        this.displayTexture(op18);

        let op19 = new tg.Pixelize();
        op19.addParent(op16);
        this.displayTexture(op19);

        let op20 = new tg.Invert();
        op20.addParent(op19);
        this.displayTexture(op20);
    }

    displayTexture(operator) {
        let canvas = new tg.Canvas(256, 256);
        operator.evaluate();
        canvas.putImageData(operator.getTexture().getImageData());
        canvas.appendToHtmlDom();
    }

    logLibraryNameAndVersion() {
        console.log(`name      : ${tg.distribution.baseName}`);
        console.log(`version   : ${tg.distribution.version}`);
        console.log(`full name : ${tg.distribution.fullName}`);
    }

    logOperatorRegistry() {
        let operatorRegistry = tg.OperatorRegistry.getInstance();
        let types = operatorRegistry.getRegisteredTypes().toString()
        console.log(`registered types: ${types}`);
    }

}

// Run the application
new Application().main();
