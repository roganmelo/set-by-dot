import setByDot from '../dist';

const obj = {
  a: { b: 'c' },
  b: [{ c: 'a' }]
};

test('It should return an error asking for a valid first parameter.', () => {
  const invalidParameterError = new Error('You have to provide a valid first parameter.');

  expect(() => setByDot()).toThrowError(invalidParameterError);
  expect(() => setByDot(1)).toThrowError(invalidParameterError);
  expect(() => setByDot('obj')).toThrowError(invalidParameterError);
  expect(() => setByDot(null)).toThrowError(invalidParameterError);
});

test('It should return the given object if the path isn\'t passed.', () => {
  const newObj = { ...obj };

  expect(setByDot(newObj)).toEqual(obj);
});

test('It should return the given value if the path is undefined.', () => {
  const newObj = { ...obj };

  expect(setByDot(newObj, undefined, 'a')).toBe('a');
});

test('It should set the value to a path for a given object.', () => {
  const newObj = { ...obj };

  expect(setByDot(newObj, 'a.b', 'a')).toEqual({ a: { b: 'a' }, b: [{ c: 'a' }] });
});

test('It should set the value to a path that doesn\'t exists in the object.', () => {
  const newObj = { ...obj };

  expect(setByDot(newObj, 'c.a', 'b'))
    .toEqual({ a: { b: 'c' }, b: [{ c: 'a' }], c: { a: 'b' } });
});

test('It should work with arrays.', () => {
  const newObj = { ...obj };
  const newObj1 = { ...obj };

  expect(setByDot(newObj, 'b.0.c', 'b')).toEqual({ a: { b: 'c' }, b: [{ c: 'b' }] });
  expect(setByDot(newObj1.b, '0.c', 'c')).toEqual([{ c: 'c' }]);
});
