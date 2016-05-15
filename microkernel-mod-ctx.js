/*
**  Microkernel -- Microkernel for Server Applications
**  Copyright (c) 2015-2016 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import path        from "path"
import syspath     from "syspath"
import appRootPath from "app-root-path"

export default class Module {
    get module () {
        return {
            name:  "microkernel-mod-ctx",
            tag:   "CTX",
            group: "BOOT"
        }
    }
    boot (kernel) {
        /*  determine application program name  */
        let program = process.argv[1].replace(/^(?:.+?\/)?([^\/]+?)(?:\.[^.]+)?$/, "$1")
        kernel.rs("ctx:program", program)

        /*  determine application base directory  */
        let basedir = appRootPath.toString()
        kernel.rs("ctx:basedir", basedir)

        /*  provide program information  */
        let pjson = require(path.join(basedir, "package.json"))
        let info = {
            app:     `${pjson.name} ${pjson.version}`,
            runtime: `Node ${process.versions.node}`,
            engine:  `V8 ${process.versions.v8}`
        }
        kernel.rs("ctx:info", info)

        /*  determine system paths  */
        let sp = syspath({ appName: pjson.name })
        kernel.rs("ctx:homedir", sp.homeDir)
        kernel.rs("ctx:datadir", sp.dataDir)

        /*  provide process mode (optionally updated by "microkernel-mod-cluster" module)  */
        kernel.rs("ctx:procmode", "standalone")
    }
}

