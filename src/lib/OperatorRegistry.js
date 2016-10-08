/**
 * The OperatorRegistry class is a global registry for operators. It is used for
 * operator stack serialization and deserialization.
 *
 * @author jdiemke <johannes.diemke@eventim.de>
 * @since 2016-10-08
 */

'use strict';

export class OperatorRegistry {

    constructor() {
        this.registry = {};
    }

    static getInstance() {
        if (OperatorRegistry.instance == null) {
            OperatorRegistry.instance = new OperatorRegistry();
        }
        return OperatorRegistry.instance;
    }

    register(operatorClass) {
        this.registry[operatorClass.getType()] = operatorClass;
    }

    getRegisteredTypes() {
        let typeList = new Array(0);

        for (let i in this.registry) {
            typeList.push(i);
        }

        return typeList;
    }

}

OperatorRegistry.instance = null;
