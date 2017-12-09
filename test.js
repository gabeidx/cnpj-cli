import test from 'ava';
import execa from 'execa';

test('it generates a valid CNPJ', async t => {
  const generated = await execa.stdout('./index.js');
  t.true(generated.length > 0);
});

