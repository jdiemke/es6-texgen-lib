/**
 * The Metric class simulates an enum that defines different metric types.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-29
 */

'use strict';

export class Metric {}

Metric.EUCLIDEAN = Symbol('EUCLIDEAN');
Metric.MANHATTEN = Symbol('MANHATTEN');
Metric.QUASI_EUCLIDEAN = Symbol('QUASI_EUCLIDEAN');
Metric.CHEBBYSHEV = Symbol('QUASI_EUCLIDEAN');

Object.freeze(Metric);
