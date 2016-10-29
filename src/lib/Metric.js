/**
 * The Metric class simulates an enum that defines different metric types.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-29
 */

'use strict';

export class Metric {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        Metric[id] = this;
    }

    toString() {
        return `Metric.${this.name}`;
    }

    static isAssignmentCompatible(value) {
        return value instanceof Metric;
    }

    static getById(id) {
        if (Metric[id]) {
            return Metric[id];
        }
        return null;
    }

}

Metric.EUCLIDEAN = new Metric(1, 'EUCLIDEAN');
Metric.MANHATTEN = new Metric(2, 'MANHATTEN');
Metric.QUASI_EUCLIDEAN = new Metric(3, 'QUASI_EUCLIDEAN');
Metric.CHEBBYSHEV = new Metric(4, 'QUASI_EUCLIDEAN');

Object.freeze(Metric);
