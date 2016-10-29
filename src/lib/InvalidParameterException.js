'use strict';

export class InvalidParameterException {

    constructor() {
        this.name = "InvalidParameterException";
        this.message = "Error detected. The number of parents is invalid.";
    }

    toString() {
        return `${this.name}: ${this.message}`;
    }

}
