/**
 *
 */

'use strict';

export class Canvas {

    constructor(width, height) {
        // Create a canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;

        // Obtain a rendering context
        this.context = this.canvas.getContext('2d');
    }

    putImageData(imageData) {
        this.context.putImageData(imageData, 0, 0);
    }

    appendToHtmlDom() {
        // Add the canvas to the html DOM
        document.body.appendChild(this.canvas);
    }

}
