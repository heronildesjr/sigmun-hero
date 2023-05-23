'use strict';
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderScripts() {

    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/js');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');

    sh.cp('-R', sourcePath, destPath)

    const sourcePathScriptsJS = upath.resolve(upath.dirname(__filename), '../src/js/sigmun.js');
    const destPathScriptsJS = upath.resolve(upath.dirname(__filename), '../dist/js/sigmun.js');
    const destPathScriptsTs = upath.resolve(upath.dirname(__filename), '../dist/js/sigmun.d.ts');

    // copy bootstrap bundle js
    const sourcePathBootstrapJS = upath.resolve(upath.dirname(__filename), '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');

    // ts compile
    const sourceTs = upath.resolve(upath.dirname(__filename), '../src/js/sigmun.d.ts');

    // const destPathBootstrapJS = upath.resolve(upath.dirname(__filename), '../dist/js/bootstrap.bundle.min.js');

    const copyright = `/*!
* Start sigmun with Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/heronildesjr/${packageJSON.name}/blob/master/LICENSE)
*/
`
    const scriptsJS = fs.readFileSync(sourcePathScriptsJS);
    const bootstrapBundle = fs.readFileSync(sourcePathBootstrapJS);
    const ts = fs.readFileSync(sourceTs);

    fs.writeFileSync(destPathScriptsJS, copyright + bootstrapBundle + scriptsJS);

    // create TS file
    fs.writeFileSync(destPathScriptsTs, ts);
};
