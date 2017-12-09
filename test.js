import test from 'ava';
import execa from 'execa';

test('it generates a valid CNPJ', async t => {
  const generated = await execa.stdout('./index.js');
  t.true(generated.length > 0);
});

test('it validates a given CNPJ', async t => {
  const valid = await execa.stdout('./index.js', ['-v', '29.709.817/0001-15']);
  t.true(valid === 'true');

  const invalid = await execa.stdout('./index.js', [
    '-v',
    '29.709.817/0001-00',
  ]);
  t.true(invalid === 'false');
});
