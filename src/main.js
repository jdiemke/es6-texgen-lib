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

        let operator8 = new tg.DistortOperator();
        operator8.addParent(operator7);
        operator8.addParent(operator2);

        operator7.setLinearCombinationType(1);

        let op9 = new tg.ColorizeOperator();
        op9.addParent(operator8);
        op9.evaluate();

        let op10 = new tg.Tile();
        op10.addParent(operator4);
        op10.evaluate();

        let op11 = new tg.ColorizeOperator();
        op11.addParent(op10);
        op11.setBackgroundColor(new tg.Color(1, 1, 0));
        op11.setForgroundColor(new tg.Color(1, 0, 0));
        op11.evaluate();

        let canvas10 = new tg.Canvas(256, 256);
        canvas10.putImageData(op11.getTexture().getImageData());
        canvas10.appendToHtmlDom();

        let op12 = new tg.Turbolence();
        operator7.setLinearCombinationType(2);
        op12.addParent(operator7);
        op12.evaluate();

        let canvas8 = new tg.Canvas(256, 256);
        canvas8.putImageData(op12.getTexture().getImageData());
        canvas8.appendToHtmlDom();

        let op13 = new tg.PlasmaFractal();
        op13.evaluate();

        let op14 = new tg.ColorizeOperator();
        op14.addParent(op13);
        op14.evaluate();

        let canvas9 = new tg.Canvas(256, 256);
        canvas9.putImageData(op14.getTexture().getImageData());
        canvas9.appendToHtmlDom();

        let op15 = new tg.AdjustIntensity();
        op15.addParent(op14);
        op15.evaluate();

        let canvas11 = new tg.Canvas(256, 256);
        canvas11.putImageData(op15.getTexture().getImageData());
        canvas11.appendToHtmlDom();

        let op16 = new tg.AlphaBlend();
        op16.addParent(op14);
        op16.addParent(operator7);
        op16.evaluate();

        let canvas12 = new tg.Canvas(256, 256);
        canvas12.putImageData(op16.getTexture().getImageData());
        canvas12.appendToHtmlDom();

        let op17 = new tg.Chrome();
        op17.addParent(op16);
        op17.evaluate();

        let canvas13 = new tg.Canvas(256, 256);
        canvas13.putImageData(op17.getTexture().getImageData());
        canvas13.appendToHtmlDom();

        console.log(tg.Metric.EUCLIDEAN);
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
