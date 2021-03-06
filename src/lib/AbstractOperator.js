/**
 * The AbstractOperator class is the base class for all operators.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-08
 */

'use strict';

import {Texture} from './Texture.js';
import {OperatorRegistry} from './OperatorRegistry.js';
import {InvalidParameterException} from './InvalidParameterException.js';

export class AbstractOperator {

    /**
     * Constructs a new Operator.
     */
    constructor() {
        this.texture = new Texture(256, 256);
        this.parents = new Array(0);
        this.setDirty(true);

        OperatorRegistry.getInstance().register(this.constructor);
    }

    /**
     * This method should be overridden in all sub classes in order to specify
     * the operators behavior.
     */
    process() {
        // Do nothing in this abstract method.
    }

    /**
     * This method is used to recursivly process all parents before this
     * operator is processed.
     */
    evaluate() {
        if (this.isDirty()) {
            if (!this.isInputAccepted()) {
                throw new InvalidParameterException();
            }

            for (let i in this.parents) {
                this.parents[i].evaluate();
            }

            this.process();
            // remeber to set operator dirty if it changes its state ir if
            // a child gets dirty ;)
            this.setDirty(false);
        }
    }

    setDirty(dirty) {
        this.dirty = dirty;
    }

    isDirty() {
        return this.dirty;
    }

    /**
     * The default implementation returns true.
     */
    isInputAccepted() {
        return true;
    }

    /**
     * Adds a parent operator to this operator. Prior to processing this
     * operator all its parents need to be processed.
     *
     * @param parent The operator to be added to the list of parent operators
     */
    addParent(parent) {
        this.parents.push(parent);
        this.setDirty(true);
    }

    /**
     * Returns the texture object that holds the final result of the evaluation
     * of this operator after calling the evaluate() method.
     */
    getTexture() {
        return this.texture;
    }

}
