import setByDot from '../dist';

const obj = {
  a: { b: 'c' },
  b: [{ c: 'a' }]
};

describe('set-by-dot', () => {
  it('should return an error asking for a valid first parameter.', () => {
    const invalidParameterError = new Error('You have to provide a valid first parameter.');

    expect(() => setByDot()).toThrowError(invalidParameterError);
    expect(() => setByDot(1)).toThrowError(invalidParameterError);
    expect(() => setByDot('obj')).toThrowError(invalidParameterError);
    expect(() => setByDot(null)).toThrowError(invalidParameterError);
  });

  it('should return the given object if the path isn\'t passed.', () => {
    expect(setByDot(obj)).toEqual(obj);
  });

  it('should return the given value if the path is undefined.', () => {
    expect(setByDot(obj, undefined, 'a')).toBe('a');
  });

  it('should set the value to a path for a given object.', () => {
    expect(setByDot(obj, 'a.b', 'a')).toEqual({ a: { b: 'a' }, b: [{ c: 'a' }] });
  });

  it('should set the value to a path that doesn\'t exists in the object.', () => {
    expect(setByDot(obj, 'c.a', 'b'))
      .toEqual({ a: { b: 'c' }, b: [{ c: 'a' }], c: { a: 'b' } });
  });

  it('should change an array inside an object.', () => {
    expect(setByDot(obj, 'b.0.c', 'b')).toEqual({ a: { b: 'c' }, b: [{ c: 'b' }] });
  });

  it('should change an array directly.', () => {
    expect(setByDot(obj.b, '0.c', 'c')).toEqual([{ c: 'c' }]);
  });

  it('should create an array in a property that doesn\'t exists.', () => {
    expect(setByDot(obj, 'c.0.c', 'c'))
      .toEqual({ a: { b: 'c' }, b: [{ c: 'a' }], c: [{ c: 'c' }] });
  });
});
