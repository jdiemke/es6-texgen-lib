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

class EuclideanMetric extends Metric {

    computeDistance(dx, dy) {
        return Math.sqrt(dx * dx + dy * dy);
    }

}

class Manhattan extends Metric {

    computeDistance(dx, dy) {
        return dx + dy;
    }

}

class QuasiEuclidean extends Metric {

    computeDistance(dx, dy) {
        if (dx > dy) {
            return dx + (Math.sqrt(2) - 1) * dy;
        } else {
            return (Math.sqrt(2) - 1) * dx + dy;
        }
    }

}

class Chebbyshev extends Metric {

    computeDistance(dx, dy) {
        return Math.max(dx, dy);
    }

}

Metric.EUCLIDEAN = new EuclideanMetric(1, 'EUCLIDEAN');
Metric.MANHATTEN = new Manhattan(2, 'MANHATTEN');
Metric.QUASI_EUCLIDEAN = new QuasiEuclidean(3, 'QUASI_EUCLIDEAN');
Metric.CHEBBYSHEV = new Chebbyshev(4, 'QUASI_EUCLIDEAN');

Object.freeze(Metric);
