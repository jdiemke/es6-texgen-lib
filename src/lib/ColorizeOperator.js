import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';

export class ColorizeOperator extends AbstractOperator {

    constructor() {
        super();
        this.color1 = new Color(0.3, 0.32, 0.04);
        this.color2 = new Color(0.5, 1.0, 0.8);
    }

    process() {
        for (let y = 0; y < 256; y++)
            for (let x = 0; x < 256; x++) {
                let scaleColor = this.parents[0].texture.getPixel(x, y);
                let finalColor = this.color2.substract(this.color1).multiplyColor(scaleColor).add(this.color1);
                this.texture.setPixel(x, y, finalColor);
            }
        }

    setBackgroundColor(color) {
        this.color1 = color;
    }

    setForgroundColor(color) {
        this.color2 = color;
    }

}
