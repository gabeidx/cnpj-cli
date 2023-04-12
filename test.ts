import { default as test } from 'ava'
import { execa } from 'execa'

test('it generates a valid CNPJ', async (t) => {
	const { stdout: generated } = await execa('./dist/index.js')
	t.true(generated.length > 0)

	const { stdout: validated } = await execa('./dist/index.js', ['-v', generated])
	t.true(validated === 'true')
})

test('it generates a valid numbers-only CNPJ', async (t) => {
	const { stdout: generated } = await execa('./dist/index.js', ['-n'])
	t.false(/\.|-|\//.test(generated))

	const { stdout: validated } = await execa('./dist/index.js', ['-v', generated])
	t.true(validated === 'true')
})

test('it validates a given CNPJ', async (t) => {
	const { stdout: valid } = await execa('./dist/index.js', ['-v', '29.709.817/0001-15'])
	t.true(valid === 'true')

	const { stdout: invalid } = await execa('./dist/index.js', ['-v', '29.709.817/0001-00'])
	t.true(invalid === 'false')
})

test('it formats a given CNPJ', async (t) => {
	const { stdout: formatted } = await execa('./dist/index.js', ['-f', '29709817000115'])
	t.is(formatted, '29.709.817/0001-15')
})
