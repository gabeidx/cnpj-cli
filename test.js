const test = require('ava')
const execa = require('execa')

test('it generates a valid CNPJ', async (t) => {
	const generated = (await execa('./index.js')).stdout
	t.true(generated.length > 0)

	const validated = (await execa('./index.js', ['-v', generated])).stdout
	t.true(validated === 'true')
})

test('it generates a valid numbers-only CNPJ', async (t) => {
	const generated = (await execa('./index.js', ['-n'])).stdout
	t.false(/\.|-|\//.test(generated))

	const validated = (await execa('./index.js', ['-v', generated])).stdout
	t.true(validated === 'true')
})

test('it validates a given CNPJ', async (t) => {
	const valid = (await execa('./index.js', ['-v', '29.709.817/0001-15'])).stdout
	t.true(valid === 'true')

	const invalid = (await execa('./index.js', ['-v', '29.709.817/0001-00']))
		.stdout
	t.true(invalid === 'false')
})

test('it formats a given CNPJ', async (t) => {
	const formatted = (await execa('./index.js', ['-f', '29709817000115'])).stdout
	t.is(formatted, '29.709.817/0001-15')
})
