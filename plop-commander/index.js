#!/usr/bin/env node
const path = require("path");
const program = require("commander");
const nodePlop = require("node-plop");
// load an instance of plop from a plopfile
const plop = nodePlop(path.resolve(__dirname, "plopfile.js"), {
  destBasePath: process.cwd()
});

program.version("0.0.1").description("Generate graphql code");

program
  .command("test")
  .alias("t")
  .description("Generate sample file")
  .option("-n, --name <name>", "Name")
  .option("-a, --age <age>", "Age")
  .action(options => {
    // get a generator by name
    const test = plop.getGenerator("test");
    // run all the generator actions using the data specified
    test
      .runActions({ name: options.name, age: options.age })
      .then(function(results) {
        console.log("Done");
      })
      .catch(err => console.error(err));
  });

program
  .command("dynamic")
  .alias("d")
  .description("Generate sample file")
  .option("-n, --name <name>", "Name")
  .option("-p, --potatoes <potatoes>", "Age", false)
  .action(options => {
    // get a generator by name
    const dynamic = plop.getGenerator("dynamic actions");
    // run all the generator actions using the data specified
    dynamic
      .runActions({ name: options.name, hasPotatoes: options.potatoes })
      .then(function(results) {
        console.log("Done");
      })
      .catch(err => console.error(err));
  });

program.parse(process.argv);
