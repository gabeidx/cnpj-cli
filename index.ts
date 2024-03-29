#!/usr/bin/env node
'use strict'

import { readFile } from 'fs/promises'
import { validate, format, generate } from 'cnpj'
import { default as meow } from 'meow'
import { default as updateNotifier } from 'update-notifier'

const pkg = JSON.parse(((await readFile(new URL('../package.json', import.meta.url))) as unknown) as string)

updateNotifier({ pkg }).notify()

const cli = meow(
	`
  Usage
    $ cnpj [--generate [--numbers-only]] [--validate] [--format] [<value>]

  Options
    -g, --generate      Generates a new valid CNPJ
    -n, --numbers-only  With --generate, outputs only the numbers for a CNPJ
    -v, --validate      Validates a given CNPJ
    -f, --format        Formats a given CNPJ

  Examples
    $ cnpj --generate
    $ cnpj --generate --numbers-only
    $ cnpj --validate 38453656000132
    $ cnpj --format 38453656000132
`,
	{
		importMeta: import.meta,
		flags: {
			generate: {
				type: 'boolean',
				alias: 'g',
			},
			numbersOnly: {
				type: 'boolean',
				alias: 'n',
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
)

if (cli.input.length === 0 || cli.flags.generate) {
	const cnpj = generate()
	const value = cli.flags.numbersOnly ? cnpj.replace(/\.|-|\//g, '') : cnpj
	console.log(value)
	process.exit(0)
}

if (cli.input.length) {
	if (cli.flags.validate) {
		console.log(validate(cli.input[0]))
		process.exit(0)
	}

	if (cli.flags.format) {
		console.log(format(cli.input[0]))
		process.exit(0)
	}
}
