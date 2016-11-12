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
        let ops = [];

        let operator = new tg.FillOperator();
        operator.setFillColor(new tg.Color(0.4, 0.5, 0.6));
        ops.push(operator);

        let operator2 = new tg.SinePlasmaOperator();
        operator2.setColor(new tg.Color(1.0, 0.4, 0.8));
        ops.push(operator2);

        let operator3 = new tg.AddOperator();
        operator3.addParent(operator);
        operator3.addParent(operator2);
        ops.push(operator3);

        let operator4 = new tg.WhiteNoise();
        operator4.setSeed(23);
        ops.push(operator4);

        let operator5 = new tg.LogicalOperator();
        ops.push(operator5);

        let operator6 = new APEX.MyOperator();
        ops.push(operator6);

        let operator7 = new tg.CellOperator();
        ops.push(operator7);

        let operator8 = new tg.DistortOperator();
        operator8.addParent(operator7);
        operator8.addParent(operator2);

        operator7.setLinearCombinationType(1);

        let op9 = new tg.ColorizeOperator();
        op9.addParent(operator8);

        let op10 = new tg.Tile();
        op10.addParent(operator4);
        let op11 = new tg.ColorizeOperator();
        op11.addParent(op10);
        op11.setBackgroundColor(new tg.Color(1, 1, 0));
        op11.setForgroundColor(new tg.Color(1, 0, 0));
        ops.push(op11);

        let op12 = new tg.Turbolence();
        operator7.setLinearCombinationType(2);
        op12.addParent(operator7);
        ops.push(op12);

        let op13 = new tg.PlasmaFractal();
        let op14 = new tg.ColorizeOperator();
        op14.addParent(op13);
        ops.push(op14);

        let op15 = new tg.AdjustIntensity();
        op15.addParent(op14);
        ops.push(op15);

        let op16 = new tg.AlphaBlend();
        op16.addParent(op14);
        op16.addParent(operator7);
        ops.push(op16);

        let op17 = new tg.Chrome();
        op17.addParent(op16);
        ops.push(op17);

        let op18 = new tg.Grayscale();
        op18.addParent(op17);
        ops.push(op18);

        let op19 = new tg.Pixelize();
        op19.addParent(op16);
        ops.push(op19);

        let op20 = new tg.Invert();
        op20.addParent(op19);
        ops.push(op20);

        let op21 = new tg.Ripple();
        op21.addParent(op20);
        ops.push(op21);

        let op22 = new tg.CellOperator();
        op22.setQuantity(26);
        op22.setLinearCombinationType(1);
        ops.push(op22);

        let op23 = new tg.ColorizeOperator();
        op23.setBackgroundColor(new tg.Color(1, 1, 0));
        op23.setForgroundColor(new tg.Color(0.2, 1, 1));
        op23.addParent(new tg.Checker());
        ops.push(op23);

        console.log("beofre");
        this.recursion(0, ops);
        console.log("after");
    }

    recursion(n, ops) {
        if (n < ops.length) {
            let currentOperator = ops[n];
            if (currentOperator && (currentOperator instanceof tg.AbstractOperator)) {
                setTimeout(() => {
                    this.displayTexture(currentOperator);
                    this.recursion(n + 1, ops);
                }, 200);
            } else {
                this.recursion(n + 1, ops);
            }
        } else {
            return;
        }
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
