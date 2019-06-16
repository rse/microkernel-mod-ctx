
microkernel-mod-ctx
===================

Microkernel module for determining the run-time context of the server application.

<p/>
<img src="https://nodei.co/npm/microkernel-mod-ctx.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/microkernel-mod-ctx.png" alt=""/>

About
-----

This is an extension module for the
[Microkernel](http://github.com/rse/microkernel) server
application environment, adding the capability to
determine the run-time context of the server application.

Usage
-----

```shell
$ npm install microkernel
$ npm install microkernel-mod-ctx
```

```js
var Microkernel = require("microkernel")
var kernel = new Microkernel()

kernel.load("microkernel-mod-ctx")
```

License
-------

Copyright (c) 2016-2019 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

