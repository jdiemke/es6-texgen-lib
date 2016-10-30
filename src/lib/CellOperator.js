/**
 * The CellOperator class implements an operator that creates a cellular worley
 * texture.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-13
 */

'use strict';

import {AbstractOperator} from './AbstractOperator.js';
import {Color} from './Color.js';
import {RandomNumberGenerator} from './RandomNumberGenerator.js';
import {Metric} from './Metric.js';

export class CellOperator extends AbstractOperator {

    constructor() {
        super();
        this.seed = 2;
        this.quantity = 66;
        this.distributiontype = 0;
        this.minimumdistance = 2;
        this.linearcombination = 2;
        this.metric = Metric.EUCLIDEAN;
        this.mosaic = false;
    }

    process() {
        this.uniformRandom();
        this.distBuffer = new Float64Array(256 * 256);
        var mindist = Number.MAX_VALUE;
        var maxdist = 0;

        for (var y = 0; y < 256; y++) {
            for (var x = 0; x < 256; x++) {
                var dist = this.distToNearestPoint(x, y, this.points, this.quantity, this.linearcombination, this.metric);
                this.distBuffer[(x + (y * 256))] = dist;

                if (dist < mindist) {
                    mindist = dist;
                }

                if (dist > maxdist) {
                    maxdist = dist;
                }
            }
        }

        for (var y = 0; y < 256; y++) {
            for (var x = 0; x < 256; x++) {
                var value = (this.distBuffer[(x + (y * 256))] - mindist) / (maxdist - mindist);
                this.texture.setPixel(x, y, new Color(value));
            }
        }
    }

    distToNearestPoint(x, y, points, number, version, metric) {
        var F = []
        F[0] = Number.MAX_VALUE;
        F[1] = Number.MAX_VALUE;
        F[2] = Number.MAX_VALUE;

        for (var i in points) {
            var dist = this.wrapDist(x, y, points[i].x, points[i].y, metric);
            if (dist < F[0]) {
                F[2] = F[1];
                F[1] = F[0];
                F[0] = dist;
            } else if (dist < F[1]) {
                F[2] = F[1];
                F[1] = dist;
            } else if (dist < F[2]) {
                F[2] = dist;
            }
        }

        // TODO: different linear combinations
        if (version == 2) {
            return F[1];
        } else {
            return F[0];
        }
    }

    wrapDist(x, y, px, py, metric) {
        let dx = Math.abs(x - px);
        let dy = Math.abs(y - py);

        if (dx > 256 / 2) {
            dx = 256 - dx;
        }

        if (dy > 256 / 2) {
            dy = 256 - dy;
        }

        return metric.computeDistance(dx, dy);
    }

    uniformRandom() {
        let rng = new RandomNumberGenerator();
        this.points = [];
        for (var i = 0; i < this.quantity; i++) {
            let i1 = rng.getInteger() * 256;
            let i2 = rng.getInteger() * 256;

            var point = {
                x: i1,
                y: i2
            };
            this.points.push(point);
        }
    }

    setLinearCombinationType(type) {
        this.linearcombination = type;
    }

}
