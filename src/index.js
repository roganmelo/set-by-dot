import getByDot from 'get-by-dot';

const setByDot = (obj, path, value) => {
  const invalidTypes = ['undefined', 'number', 'string'];
  const invalidValues = [null];
  const type = typeof obj;

  if(invalidTypes.includes(type) || invalidValues.includes(obj)) {
    throw new Error('You have to provide a valid first parameter.');
  }

  if(!path) return value || obj;

  const parts = path.split('.');
  const reversedParts = [...parts].reverse();
  const result = reversedParts.reduce((prev, curr, index, array) => {
    if(!Number.isNaN(parseInt(curr, 10))) {
      const keys = [...array].splice(index + 1, array.length - index);
      const arrayPath = keys.reverse().join('.');
      const modelArray = [...getByDot(obj, arrayPath)];
      modelArray[curr] = prev;

      return modelArray;
    }

    return { [curr]: prev };
  }, value);

  return Array.isArray(result) ? result : { ...obj, ...result };
};

export default setByDot;
