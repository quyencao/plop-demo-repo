#!/usr/bin/env node
process.argv.push("--plopfile", __dirname + "/plopfile.js");
process.argv.push("--dest", process.cwd());
require("plop/bin/plop");
