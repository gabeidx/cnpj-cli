#!/usr/bin/env node
'use strict';

const CNPJ = require('cnpj').default;
const meow = require('meow');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

const cli = meow(
  `
  Usage
    $ cnpj [--generate] [--validate] [--format] [<value>]

  Options
    -g, --generate     Generates a new valid CNPJ
    -v, --validate     Validates a given CNPJ
    -f, --format       Formats a given CNPJ

  Examples
    $ cnpj --generate
    $ cnpj --validate 38453656000132
    $ cnpj --format 38453656000132
`,
  {
    flags: {
      generate: {
        type: 'boolean',
        alias: 'g',
      },
      validate: {
        type: 'boolean',
        alias: 'v',
      },
      format: {
        type: 'boolean',
        alias: 'f',
      },
    },
  }
);

if (cli.input.length === 0 || cli.flags.generate) {
  console.log(CNPJ.generate());
  return process.exit(0);
}

