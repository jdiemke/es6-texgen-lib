# es6-texgen-lib

[![Greenkeeper badge](https://badges.greenkeeper.io/jdiemke/es6-texgen-lib.svg)](https://greenkeeper.io/)

A node-based procedural texture generation library written in ECMAScript 6.
### How to build
Type the following commands into your shell:
```bash
npm install
npm run webpack
```
### How to run
Type the following command into your shell, open a browser and access [http://localhost:8080](http://localhost:8080):
```bash
npm start
```
### Demo
[http://jdiemke.github.io/es6-texgen-lib/](http://jdiemke.github.io/es6-texgen-lib/)
### Plugin Development
You can extend the texture generation library by writing your own plugins. All you have to to in order to extend the library with new operators is to subclass the `AbsractOperator` class:
```javascript
import * as APEX from './lib/es6-texgen-lib.js';

export class MyOperator extends APEX.AbstractOperator {

    process() {
        this.texture.fill(new APEX.Color(0.0, 1.0, 0.0));
    }

}
```
