import test from 'tape';
test('<Post />', assert => {
  const msg = 'something';

  const actual = 'something';
  const expected = 'something';

  assert.same(actual, expected, msg);
  assert.end();
});